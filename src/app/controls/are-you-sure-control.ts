import { FormControl } from '@angular/forms';

export class AreYouSureControl extends FormControl {

  constructor() {
    super('');
    this.settingValidators();
  }

  private settingValidators() {
    this.setValidators([this.customValidator()]);
  }

  private customValidator() {
    return () => {
      return this.value ? null : { condition: false };
    };
  }
}
