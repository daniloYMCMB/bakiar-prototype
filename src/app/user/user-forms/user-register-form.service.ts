import { LastNameControl } from './../../controls/lastName-control';
import { UserFormStoreService } from './../user-stores/user-form-store.service';
import { NameControl } from './../../controls/name-control';
import { DniControl } from './../../controls/dni-control';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserControl } from 'src/app/controls/user-controls';

@Injectable()
export class UserRegisterFormService {

  public form: FormGroup;

  private _dniControl = new DniControl();
  private _lastNameControl = new LastNameControl();
  private _nameControl = new NameControl();
  private _userControl = new UserControl();

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public userRegisterStore: UserFormStoreService,
  ) {
    this.form = this.formBuilder.group({
      dni: this._dniControl,
      lastName: this._lastNameControl,
      name: this._nameControl,
      user: this._userControl
    });
    this.loadInitialFormValues();
    this.settingControlValues();
  }

  public get dniControl() {
    return this.form.get('dni') as DniControl;
  }

  public get lastNameControl() {
    return this.form.get('lastName') as LastNameControl;
  }

  public get nameControl() {
    return this.form.get('name') as NameControl;
  }

  public get userControl() {
    return this.form.get('user') as UserControl;
  }

  private loadInitialFormValues() {
    this.userRegisterStore.form$
      .pipe(take(1))
      .subscribe(form => {
        this.form.setValue({
          dni: form.dni,
          lastName: form.lastName,
          name: form.name,
          user: form.user,
        });
      });
  }

  private settingControlValues() {
    const dniSubscription = this.dniControl.valueChanges
      .subscribe(value => this.userRegisterStore.setDniValue(value as string));
    const lastNameSubscription = this.lastNameControl.valueChanges
      .subscribe(value => this.userRegisterStore.setLastNameValue(value as string));
    const nameSubscription = this.nameControl.valueChanges
      .subscribe(value => this.userRegisterStore.setNameValue(value as string));
    const userSubscription = this.userControl.valueChanges
      .subscribe(value => this.userRegisterStore.setUserValue(value as string));
    this.subscriptions.push(dniSubscription, lastNameSubscription, nameSubscription, userSubscription);
  }

  public unsubscribeObservers() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
