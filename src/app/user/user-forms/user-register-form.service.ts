import { UserFormStoreService } from './../user-stores/user-form-store.service';
import { PhoneControl } from './../../controls/phone-control';
import { NameControl } from './../../controls/name-control';
import { EmailControl } from './../../controls/email-control';
import { DniControl } from './../../controls/dni-control';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class UserRegisterFormService {

  public form: FormGroup;

  private _dniControl = new DniControl();
  private _emailControl = new EmailControl();
  private _nameControl = new NameControl();
  private _phoneControl = new PhoneControl();

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public userRegisterStore: UserFormStoreService,
  ) {
    this.form = this.formBuilder.group({
      dni: this._dniControl,
      email: this._emailControl,
      name: this._nameControl,
      phone: this._phoneControl
    });
    this.loadInitialFormValues();
    this.settingControlValues();
  }

  public get dniControl() {
    return this.form.get('dni') as DniControl;
  }

  public get emailControl() {
    return this.form.get('email') as EmailControl;
  }

  public get nameControl() {
    return this.form.get('name') as NameControl;
  }

  public get phoneControl() {
    return this.form.get('phone') as PhoneControl;
  }

  private loadInitialFormValues() {
    this.userRegisterStore.form$
      .pipe(take(1))
      .subscribe(form => {
        this.form.setValue({
          dni: form.dni,
          email: form.email,
          name: form.name,
          phone: form.phone,
        });
      });
  }

  private settingControlValues() {
    const dniSubscription = this.dniControl.valueChanges
      .subscribe(value => this.userRegisterStore.setDniValue(value as string));
    const emailSubscription = this.emailControl.valueChanges
      .subscribe(value => this.userRegisterStore.setEmailValue(value as string));
    const nameSubscription = this.nameControl.valueChanges
      .subscribe(value => this.userRegisterStore.setNameValue(value as string));
    const phoneSubscription = this.phoneControl.valueChanges
      .subscribe(value => this.userRegisterStore.setPhoneValue(value as string));
    this.subscriptions.push(dniSubscription, emailSubscription, nameSubscription, phoneSubscription);
  }

  public unsubscribeObservers() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
