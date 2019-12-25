import { FormControl, Validators } from '@angular/forms';
import { CONFIG_USER_NOT_REGISTERED } from '../parameters/enums';
import { getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { GenericValidator } from '../validators/generic-validator';
import { PHONE_NUMBER_ERROR_MESSAGES } from '../parameters/error-message-forms';


export class PhoneControl extends FormControl {

  constructor() {
    super('');
    this.settingNameValidators();
  }

  private settingNameValidators() {
    this.setValidators([
        Validators.required,
        Validators.minLength(CONFIG_USER_NOT_REGISTERED.MIN_LENGHT_NUMBER_PHONE),
        GenericValidator.validateNumbers,
        GenericValidator.numberPhoneValidation
    ]);
  }

  public get phoneNumberError(): string {
    return getErrorbyFormControl(this, PHONE_NUMBER_ERROR_MESSAGES);
  }
}
