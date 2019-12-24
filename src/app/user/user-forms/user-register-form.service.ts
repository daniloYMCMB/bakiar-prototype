import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    private userRegisterStore: Store,
  ) {
    this.form.
  }
}
