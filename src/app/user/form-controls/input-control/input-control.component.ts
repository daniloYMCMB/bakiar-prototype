import { Component, Input, ContentChild, ElementRef, AfterContentInit, OnChanges, Renderer2 } from '@angular/core';

const ERROR_BORDER_COLOR = 'border-color: #E74848';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.styl']
})
export class InputControlComponent implements OnChanges, AfterContentInit {

  @ContentChild('inputControl', { static: false }) inputControl: ElementRef<HTMLInputElement>;

  @Input() inputTitle = '';
  @Input() errorMessage = '';
  @Input() marginWithError = true;

  private isInputControlReady = false;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnChanges() {
    if (this.isInputControlReady) {
      this.updateErrorStatus();
    }
  }

  ngAfterContentInit(): void {
    this.isInputControlReady = true;
    this.updateErrorStatus();
  }

  private updateErrorStatus() {
    if (this.inputControl) {
      const input = this.inputControl.nativeElement;
      if (this.errorMessage) {
        this.renderer.setAttribute(input, 'style', ERROR_BORDER_COLOR);
      } else {
        this.renderer.removeAttribute(input, 'style');
      }
    }
  }
}
