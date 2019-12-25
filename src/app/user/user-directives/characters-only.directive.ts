import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { NAVIGATION_KEYBOARD_KEYS, KEYS_FOR_COMBO } from '../../parameters/keyboard.constant';

@Directive({
  selector: '[appCharacterOnly]'
})
export class CharactersOnlyDirective {
  private decimalCounter = 0;
  private navigationKeys = NAVIGATION_KEYBOARD_KEYS;
  private keysForCombo = KEYS_FOR_COMBO;
  @Input() decimal ? = false;
  inputElement: HTMLInputElement;

  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    const isNavigationKey = this.navigationKeys.includes(e.key);
    const isKeyboardCombo = this.keysForCombo.includes(e.key) && (e.ctrlKey === true || e.metaKey === true);
    const isValidDecimal = [ this.decimal, e.key === '.', this.decimalCounter < 1 ].every(condition => condition);
    const isKeyboardSpace = e.key === ' ';
    const existOneValidCondition = [
        isNavigationKey,
        isKeyboardCombo,
        isValidDecimal,
        isKeyboardSpace,
        isNaN(Number(e.key)),
      ].some(condition => condition);
    if (!existOneValidCondition) {
      e.preventDefault();
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    if (this.decimal) {
      this.decimalCounter = this.el.nativeElement.value.split('.').length - 1;
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedInput: string = event.clipboardData.getData('text/plain');
    let pasted = false;
    if (this.isValidDecimal(pastedInput)) {
      pasted = document.execCommand(
        'insertText',
        false,
        pastedInput.replace(/[^0-9.]/g, '')
      );
    }
    if (pasted) {
      event.preventDefault();
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(pastedInput);
        document.execCommand('paste');
      }
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    const textData = event.dataTransfer.getData('text');
    this.inputElement.focus();

    let pasted = false;
    if (!this.decimal) {
      pasted = document.execCommand(
        'insertText',
        false,
        textData.replace(/[^0-9]/g, '')
      );
    } else if (this.isValidDecimal(textData)) {
      pasted = document.execCommand(
        'insertText',
        false,
        textData.replace(/[^0-9.]/g, '')
      );
    }
    if (pasted) {
      event.preventDefault();
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textData);
        document.execCommand('paste');
      }
    }
  }

  isValidDecimal(string: string): boolean {
    return string.split('.').length <= 2;
  }
}
