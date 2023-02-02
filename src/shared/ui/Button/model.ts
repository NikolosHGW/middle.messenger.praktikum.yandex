import { ButtonComponent } from './ButtonComponent';

const Button = ({
  text = 'Авторизоваться',
  buttonType = 'button',
  ariaLabel = 'auth',
  classButton = 'button',
  events = {},
} = {}) => new ButtonComponent({
  text,
  events,
  attributes: { class: classButton, 'aria-label': ariaLabel, type: buttonType },
});

export { Button };
