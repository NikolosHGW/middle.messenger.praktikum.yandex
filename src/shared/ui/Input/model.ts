import ui from './ui.hbs';

const InputTemplate = (
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

export { InputTemplate };
