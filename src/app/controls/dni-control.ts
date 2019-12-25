import { FormControl, Validators } from '@angular/forms';
import { CONFIG_USER_NOT_REGISTERED } from '../parameters/enums';
import { DNI_ERROR_MESSAGES } from '../parameters/global-error-message';
import { getErrorbyFormControl } from '../helpers/error-controls-helpers';
import { GenericValidator } from '../validators/generic-validator';

export class DniControl extends FormControl {

  constructor() {
    super('');
    this.settingNameValidators();
  }

  private settingNameValidators() {
    this.setValidators([
      Validators.required,
      Validators.minLength(CONFIG_USER_NOT_REGISTERED.MIN_LENGHT_DNI),
      GenericValidator.validateNumbers
    ]);
  }

  public get dniError(): string {
    return getErrorbyFormControl(this, DNI_ERROR_MESSAGES);
  }

}

