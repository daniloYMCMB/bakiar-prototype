import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersOnlyDirective } from './characters-only.directive';
import { DigitOnlyDirective } from './digit-only.directive';

@NgModule({
  declarations: [
    CharactersOnlyDirective,
    DigitOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharactersOnlyDirective,
    DigitOnlyDirective
  ]
})
export class UserDirectivesModule { }
