import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputControlComponent } from './input-control/input-control.component';
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
  declarations: [
    InputControlComponent,
    InputPasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputControlComponent,
    InputPasswordComponent
  ]
})
export class FormControlsModule { }
