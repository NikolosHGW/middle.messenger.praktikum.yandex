import { getInputTarget } from '../../utils/helpers';
import { InputType } from './types';

class Validation {
  static CONSTANTS = {
    label: 'label',
    errorSpanClass: '.error-span',
    errorSpanActive: 'error-span_active',
    login: 'login',
  };

  static toggleErrorClass = (input: HTMLInputElement | null, isValide: boolean) => {
    if (input) {
      const errorSpan: HTMLSpanElement | undefined | null = input.closest(this.CONSTANTS.label)
        ?.querySelector(this.CONSTANTS.errorSpanClass);
      if (errorSpan) {
        if (isValide) {
          this.removeErrorClass(errorSpan);
        } else {
          this.addErrorClass(errorSpan);
        }
      }
    }
  };

  static addErrorClass = (errorSpan: HTMLSpanElement) => {
    errorSpan.classList.add(this.CONSTANTS.errorSpanActive);
    errorSpan.textContent = 'Ошибка!';
  };

  static removeErrorClass = (errorSpan: HTMLSpanElement) => {
    errorSpan.classList.remove(this.CONSTANTS.errorSpanActive);
    errorSpan.textContent = '';
  };

  static hadleInputEvent = (evt: Event, inputType: InputType) => {
    switch (inputType) {
      case this.CONSTANTS.login: {
        const { target } = evt;
        const { value } = getInputTarget(target);
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkLogin(value));
        break;
      }
      default:
        Validation.checkLogin(getInputTarget(evt.target).value);
        break;
    }
  };

  static checkLogin = (value: string) => value.match('^(?![0-9]+$)[a-zA-Z0-9-_]{3,20}$');
}

export { Validation };
