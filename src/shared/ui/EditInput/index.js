import ui from './ui.hbs';
import './style.scss';

const EditInput = (
  {
    inputId = 'name-input',
    placeholder = 'Логин',
    inputName = 'name',
    inputType = 'text',
    spanText = 'Логин',
  } = {
    inputId: 'name-input',
    placeholder: 'Логин',
    inputName: 'name',
    inputType: 'text',
    spanText: 'Логин',
  },
) => ui({
  inputId, placeholder, inputName, inputType, spanText,
});

export { EditInput };
