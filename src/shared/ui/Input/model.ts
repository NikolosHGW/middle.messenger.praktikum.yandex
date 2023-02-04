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
  autocomplete = 'false',
  events = {},
} = {}) => new InputComponent({
  inputId,
  placeholder,
  inputName,
  inputType,
  inputClassName,
  errorSpanClassName,
  withEditSpan,
  spanText,
  autocomplete,
  events,
  attributes: { class: className },
});

export { Input };
