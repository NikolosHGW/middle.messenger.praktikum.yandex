import {
  emailRegex,
  loginRegexString,
  nameRegex,
  passwordRegex,
  phoneRegex,
} from '../../utils/constants';
import { getInputTarget } from '../../utils/helpers';
import { InputType } from './types';

class Validation {
  static CONSTANTS = {
    label: 'label',
    errorSpanClass: '.error-span',
    errorSpanActive: 'error-span_active',
    login: 'login',
    password: 'password',
    input: 'input',
    email: 'email',
    firstName: 'first_name',
    secondName: 'second_name',
    phone: 'phone',
    displayName: 'display_name',
    oldPassword: 'old_password',
    newPassword: 'new_password',
    repeatPassword: 'repeat_password',
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

  static handleInputEvent = (target: EventTarget, inputType: InputType) => {
    const { value } = getInputTarget(target);
    switch (inputType) {
      case this.CONSTANTS.login: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkLogin(value));
        break;
      }
      case this.CONSTANTS.password: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkPassword(value));
        break;
      }
      case this.CONSTANTS.email: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkEmail(value));
        break;
      }
      case this.CONSTANTS.firstName: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkName(value));
        break;
      }
      case this.CONSTANTS.secondName: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkName(value));
        break;
      }
      case this.CONSTANTS.phone: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkPhone(value));
        break;
      }
      case this.CONSTANTS.displayName: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkName(value));
        break;
      }
      case this.CONSTANTS.oldPassword: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkPassword(value));
        break;
      }
      case this.CONSTANTS.newPassword: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkPassword(value));
        break;
      }
      case this.CONSTANTS.repeatPassword: {
        this.toggleErrorClass(target as HTMLInputElement, !!this.checkPassword(value));
        break;
      }
      default:
        Validation.checkLogin(getInputTarget(target).value);
        break;
    }
  };

  static handleSubmit = (evt: Event) => {
    const inputs = (evt.target as HTMLFormElement).querySelectorAll(this.CONSTANTS.input);
    if (inputs) {
      inputs.forEach((input) => {
        const name = input.attributes.getNamedItem('name')?.value;
        if (name) {
          this.handleInputEvent(input, (name as InputType));
        }
      });
    }
  };

  static checkLogin = (value: string) => value.match(loginRegexString);

  static checkPassword = (value: string) => value.match(passwordRegex);

  static checkEmail = (value: string) => value.match(emailRegex);

  static checkName = (value: string) => value.match(nameRegex);

  static checkPhone = (value: string) => value.match(phoneRegex);
}

export { Validation };
