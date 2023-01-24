import './style.scss';
import { InputComponent } from './InputComponent';

const Input = ({
  inputId = 'name-input',
  placeholder = 'Логин',
  inputName = 'name',
  inputType = 'text',
}) => new InputComponent({
  inputId, placeholder, inputName, inputType,
});

export { Input };
