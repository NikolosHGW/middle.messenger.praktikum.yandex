import ui from './ui.hbs';
import './style.scss';

const TextButton = (
  {
    text = 'Нет аккаунта?',
    isRed = false,
    href = '',
  } = {
    text: 'Нет аккаунта?',
    isRed: false,
    href: '',
  },
) => {
  const className = isRed ? 'text-button form__text-button text-button_color_red' : 'text-button form__text-button';

  return ui({ text, className, href });
};

export { TextButton };
