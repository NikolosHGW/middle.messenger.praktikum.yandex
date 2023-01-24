import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Form } from '../../entities/Form';
import { TextButton } from '../../shared/ui/TextButton';
import './style.scss';

const inputs = Input({ inputId: 'password-input', placeholder: 'Пароль', inputName: 'password' })
  + Input({ inputId: 'password-input', placeholder: 'Пароль', inputName: 'password' });

const buttons = Button({ text: 'Войти' }) + TextButton({
  text: 'Нет аккаунта?',
  buttonType: 'button',
  ariaLabel: 'without account',
  classButton: 'text-button form__text-button',
  href: 'auth',
});

const form = Form(
  {
    title: 'Вход',
    formName: 'login',
    Inputs: inputs,
    Buttons: buttons,
  },
);

const LoginPage = () => ui({ Form: form });

export { LoginPage };
