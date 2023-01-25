import { InputComponent } from './InputComponent';

const Input = ({
  inputId = 'name-input',
  placeholder = 'Логин',
  inputName = 'name',
  inputType = 'text',
  className = 'label',
} = {}) => new InputComponent({
  inputId, placeholder, inputName, inputType, attributes: { class: className },
});

export { Input };
