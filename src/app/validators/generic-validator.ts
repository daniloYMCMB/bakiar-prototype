import { Validators, FormControl } from '@angular/forms';
import { CONFIG_USER_NOT_REGISTERED } from '../parameters/enums';

const validCharacters = /^[A-Za-zÀ-ÿ\u00f1\u00d1 ]+$/;
const validNumbers = /^[0-9]*$/;

export class GenericValidator extends Validators {

  static validateCharacters(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const matches = validCharacters.test(control.value);
      return matches ? null : { 'validateCharacters': matches };
    } else {
      return null;
    }
  }

  static validateNumbers(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const matches = validNumbers.test(control.value);
      return matches ? null : { 'validateNumbers': matches };
    } else {
      return null;
    }
  }

  static numberPhoneValidation(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      const firstNumber = control.value.substr(0, 1);
      if (+firstNumber !== CONFIG_USER_NOT_REGISTERED.FIRST_RIGHT_NUMBER_NUMBER_PHONE) {
        return { 'numberPhoneValidation': false };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

}
