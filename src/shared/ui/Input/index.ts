import ui from './ui.hbs';
import './style.scss';

const InputTemplier = (
  {
    inputId = 'name-input',
    placeholder = 'Логин',
    inputName = 'name',
    inputType = 'text',
  } = {
    inputId: 'name-input',
    placeholder: 'Логин',
    inputName: 'name',
    inputType: 'text',
  },
) => ui({
  inputId, placeholder, inputName, inputType,
});

export { InputTemplier };
