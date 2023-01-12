import ui from './ui.hbs';
import './style.scss';

const Input = (
  props = {
    inputId: 'name-input',
    placeholder: 'Логин',
  }
) => ui(props);

export { Input };
