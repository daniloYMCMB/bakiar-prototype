import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputControlComponent } from './input-control/input-control.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { CheckboxControlComponent } from './checkbox-control/checkbox-control.component';

@NgModule({
  declarations: [
    InputControlComponent,
    InputPasswordComponent,
    CheckboxControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputControlComponent,
    InputPasswordComponent,
    CheckboxControlComponent
  ]
})
export class FormControlsModule { }
