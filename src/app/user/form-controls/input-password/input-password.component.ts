import { Component, Input, ContentChild, ElementRef, AfterContentInit, OnChanges, Renderer2 } from '@angular/core';

const ERROR_BORDER_COLOR = 'border-color: #E74848';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.styl']
})
export class InputPasswordComponent {

  @Input() inputTitle = '';
  @Input() errorMessage = '';
  @Input() marginWithError = true;
  @Input() isVerify = false;

  private isInputControlReady = false;
  public changeIcon = 'preview-on';

  constructor(
    private renderer: Renderer2
  ) { }


}
