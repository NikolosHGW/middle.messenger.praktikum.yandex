import { TextButtonComponent } from './TextButtonComponent';

const TextButton = ({
  text = 'Нет аккаунта?',
  className = 'text-button form__text-button',
  href = '',
} = {}) => new TextButtonComponent({
  text, attributes: { class: className, href },
});

export { TextButton };
