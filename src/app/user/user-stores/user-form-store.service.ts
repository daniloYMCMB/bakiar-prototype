import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  IAnonymousUserFormStore,
  INITIAL_ANONYMOUS_USER_FORM_STORE,
} from '../../models/user-form-store.interface';
import { AppStoreService } from '../../stores/app-store.service';

@Injectable()
export class UserFormStoreService {

  private readonly CHECKOUT_ANONYMOUS_USER_KEY = 'CAUFS';
  private form: IAnonymousUserFormStore;
  private formSubject = new BehaviorSubject<IAnonymousUserFormStore>(this.getFormStorage());

  private subscriptions: Subscription[] = [];

  public form$ = this.formSubject.asObservable();

  constructor(
    private appStore: AppStoreService
  ) {
    const formSubscription = this.form$
      .subscribe(form => {
        this.form = form;
        this.setFormStorage();
      });
    this.subscriptions.push(formSubscription);
  }

  public setDniValue(value: string) {
    this.setOneFormValue(value, 'dni');
  }

  public setEmailValue(value: string) {
    this.setOneFormValue(value, 'email');
  }

  public setNameValue(value: string) {
    this.setOneFormValue(value, 'name');
  }

  public setPhoneValue(value: string) {
    this.setOneFormValue(value, 'phone');
  }

  public setOneFormValue(value: string, key: string) {
    const { form } = this;
    form[key] = value;
    this.formSubject.next(form);
  }

  public setFormStorage(): void {
    const { form, CHECKOUT_ANONYMOUS_USER_KEY } = this;
    const stringFormatOfForm = JSON.stringify(form);
    this.appStore.setStorageItem(CHECKOUT_ANONYMOUS_USER_KEY, stringFormatOfForm);
  }

  public getFormStorage(): IAnonymousUserFormStore {
    const { CHECKOUT_ANONYMOUS_USER_KEY } = this;
    const stringFromStorage = this.appStore.getStorageItem(CHECKOUT_ANONYMOUS_USER_KEY);
    let jsonFormatOfForm = INITIAL_ANONYMOUS_USER_FORM_STORE;
    if (stringFromStorage) {
      jsonFormatOfForm = JSON.parse(this.appStore.getStorageItem(CHECKOUT_ANONYMOUS_USER_KEY)) as IAnonymousUserFormStore;
    }
    return jsonFormatOfForm;
  }

  public unsubscribeObservers() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
