import ui from './ui.hbs';
import './style.scss';

const Button = (
  props = {
    text: 'Авторизоваться',
    buttonType: 'button',
    ariaLabel: 'login'
  }
) => ui(props);

export { Button };
