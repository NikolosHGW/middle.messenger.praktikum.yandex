import { InputComponent } from './InputComponent';

const Input = ({
  inputId = 'name-input',
  placeholder = 'Логин',
  inputName = 'name',
  inputType = 'text',
  className = 'label',
  inputClassName = 'label__input',
  errorSpanClassName = 'label__input-error',
  withEditSpan = false,
  spanText = '',
} = {}) => new InputComponent({
  inputId,
  placeholder,
  inputName,
  inputType,
  inputClassName,
  errorSpanClassName,
  withEditSpan,
  spanText,
  attributes: { class: className },
});

export { Input };
