import { FormControl } from '@angular/forms';

export function getEnableErrorMessages(formControl: FormControl): boolean {
  const value = formControl.invalid && ( formControl.touched || formControl.dirty );
  return value;
}

export function getErrorbyFormControl(formControl: FormControl, errorMessageArray: any ): string {
  if (getEnableErrorMessages(formControl)) {
    if (formControl.errors) {
      const errorKeys = Object.keys(formControl.errors);
      const currentKey = errorKeys[0];
      return errorMessageArray[currentKey];
    }
  }
  return '';
}
