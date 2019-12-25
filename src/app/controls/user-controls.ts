import { FormControl, Validators } from '@angular/forms';
import { GenericValidator } from '../validators/generic-validator';
import { NAME_ERROR_MESSAGES } from '../parameters/error-message-forms';
import { getErrorbyFormControl } from '../helpers/error-controls-helpers';

export class UserControl extends FormControl {

  constructor() {
    super('');
    this.settingNameValidators();
  }

  private settingNameValidators() {
    this.setValidators([
      Validators.required,
      GenericValidator.validateCharacters
    ]);
  }

  public get nameError(): string {
    return getErrorbyFormControl(this, NAME_ERROR_MESSAGES);
  }

}
