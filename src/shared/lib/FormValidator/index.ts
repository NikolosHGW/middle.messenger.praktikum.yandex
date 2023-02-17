import { ConfigType } from './types';

class FormValidator {
  private inputSelector: string;

  private submitButtonSelector: string;

  private inactiveButtonClass: string;

  private inputErrorClass: string;

  private errorClass: string;

  private formElement: HTMLFormElement;

  private inputList: HTMLInputElement[];

  private submitButton: HTMLButtonElement;

  constructor(
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    }: ConfigType,
    formElement: HTMLFormElement,
  ) {
    this.inputSelector = inputSelector;
    this.submitButtonSelector = submitButtonSelector;
    this.inactiveButtonClass = inactiveButtonClass;
    this.inputErrorClass = inputErrorClass;
    this.errorClass = errorClass;
    this.formElement = formElement;
  }

  private initVariables() {
    this.inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    this.submitButton = this.formElement
      .querySelector(this.submitButtonSelector) as HTMLButtonElement;
  }

  private showInputError(inputElement: HTMLInputElement, errorMessage: string) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this.errorClass);
    }
  }

  private hideInputError(inputElement: HTMLInputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    if (errorElement) {
      errorElement.classList.remove(this.errorClass);
      errorElement.textContent = '';
    }
  }

  private hasInvalidInput() {
    return this.inputList.some((inputElement) => !inputElement.validity.valid);
  }

  private toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.submitButton.classList.add(this.inactiveButtonClass);
      this.submitButton.setAttribute('disabled', 'true');
    } else {
      this.submitButton.classList.remove(this.inactiveButtonClass);
      this.submitButton.removeAttribute('disabled');
    }
  }

  private checkInputValidity(inputElement: HTMLInputElement) {
    if (inputElement.validity.valid) {
      this.hideInputError(inputElement);
    } else {
      this.showInputError(inputElement, inputElement.validationMessage);
    }
  }

  private hideInputsErrors() {
    this.inputList.forEach((inputElement) => {
      this.hideInputError(inputElement);
    });
  }

  private setEventListeners() {
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
      inputElement.addEventListener('focus', () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
      inputElement.addEventListener('blur', () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  resetValidation() {
    this.toggleButtonState();
    this.hideInputsErrors();
  }

  enableValidation() {
    this.initVariables();
    this.setEventListeners();
  }
}

export { FormValidator };
