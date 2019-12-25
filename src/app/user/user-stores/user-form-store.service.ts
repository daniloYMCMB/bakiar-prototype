import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  IUserFormStore,
  INITIAL_USER_FORM_STORE,
} from '../../models/user-form-store.interface';
import { AppStoreService } from '../../stores/app-store.service';

@Injectable()
export class UserFormStoreService {

  private readonly USER_KEY = 'USER';
  private form: IUserFormStore;
  private formSubject = new BehaviorSubject<IUserFormStore>(this.getFormStorage());

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

  public setLastNameValue(value: string) {
    this.setOneFormValue(value, 'lastName');
  }

  public setNameValue(value: string) {
    this.setOneFormValue(value, 'name');
  }

  public setUserValue(value: string) {
    this.setOneFormValue(value, 'user');
  }

  public setOneFormValue(value: string, key: string) {
    const { form } = this;
    form[key] = value;
    this.formSubject.next(form);
  }

  public setFormStorage(): void {
    const { form, USER_KEY } = this;
    const stringFormatOfForm = JSON.stringify(form);
    this.appStore.setStorageItem(USER_KEY, stringFormatOfForm);
  }

  public getFormStorage(): IUserFormStore {
    const { USER_KEY } = this;
    const stringFromStorage = this.appStore.getStorageItem(USER_KEY);
    let jsonFormatOfForm = INITIAL_USER_FORM_STORE;
    if (stringFromStorage) {
      jsonFormatOfForm = JSON.parse(this.appStore.getStorageItem(USER_KEY)) as IUserFormStore;
    }
    return jsonFormatOfForm;
  }

  public unsubscribeObservers() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
