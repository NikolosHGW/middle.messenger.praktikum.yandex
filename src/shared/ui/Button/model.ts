import { ButtonComponent } from './ButtonComponent';

const Button = ({
  text = 'Авторизоваться',
  buttonType = 'button',
  ariaLabel = 'auth',
  classButton = 'button',
} = {}) => new ButtonComponent({
  text, attributes: { class: classButton, 'aria-label': ariaLabel, type: buttonType },
});

export { Button };
