import ui from '../Button/ui.hbs';
import './style.scss';

const TextButton = (
  props = {
    text: 'Авторизоваться',
    buttonType: 'button',
    ariaLabel: 'login',
    classButton: 'text-button',
  }
) => ui(props);

export { TextButton };
