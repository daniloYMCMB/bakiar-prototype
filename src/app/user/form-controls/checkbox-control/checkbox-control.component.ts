import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.styl'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlComponent),
      multi: true
    }
  ]
})
export class CheckboxControlComponent implements OnInit {

  public isDisabled: boolean;
  public checked = false;

  onChange = (_: any) => { };
  onTouch = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any): void {
    if (typeof value === 'boolean') {
      this.checked = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public checkInput(value: HTMLInputElement) {
    this.checked = value.checked;
    this.onChange(this.checked);
    this.onTouch(this.checked);
  }

}
