import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputControlComponent } from './input-control/input-control.component';

@NgModule({
  declarations: [InputControlComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputControlComponent
  ]
})
export class FormControlsModule { }
