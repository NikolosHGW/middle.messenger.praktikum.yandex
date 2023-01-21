import ui from './ui.hbs';
import './style.scss';

const Button = (
  {
    text = 'Авторизоваться',
    buttonType = 'button',
    ariaLabel = 'auth',
    classButton = 'button',
  } = {
    text: 'Авторизоваться',
    buttonType: 'button',
    ariaLabel: 'login',
    classButton: 'button',
  },
) => ui({
  text, buttonType, ariaLabel, classButton,
});

export { Button };
