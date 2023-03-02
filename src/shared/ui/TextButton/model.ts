import { TextButtonComponent } from './TextButtonComponent';

const TextButton = ({
  text = 'Нет аккаунта?',
  className = 'text-button form__text-button',
  buttonType = 'button',
  ariaLabel = 'link',
  events = {},
} = {}) => new TextButtonComponent({
  text,
  events,
  attributes: {
    class: className,
    'aria-label': ariaLabel,
    type: buttonType,
  },
});

export { TextButton };
