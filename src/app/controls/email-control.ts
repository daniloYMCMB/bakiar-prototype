import { FormControl, Validators } from '@angular/forms';
import { getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { EMAIL_LOGIN_ERROR_MESSAGES } from '../parameters/error-message-forms';

export class EmailControl extends FormControl {

  constructor() {
    super('');
    this.settingNameValidators();
  }

  private settingNameValidators() {
    this.setValidators([
      Validators.required,
      Validators.email
    ]);
  }

  public get emailAddressError(): string {
    return getErrorbyFormControl(this, EMAIL_LOGIN_ERROR_MESSAGES);
  }

}
