import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Form } from '../../entities/Form';
import './style.scss';
import { TextButton } from '../../shared/ui/TextButton';

const inputs = Input({ inputId: 'login-input', placeholder: 'Логин' })
  + Input({  inputId: 'password-input', placeholder: 'Пароль' });

const buttons = Button() + TextButton({
  text: 'Нет аккаунта?',
  buttonType: 'button',
  ariaLabel: 'without account',
  classButton: 'text-button form__text-button',
});

const form = Form(
  {
    title: 'Вход',
    formName: 'authForm',
    Inputs: inputs,
    Buttons: buttons,
  }
);

const LoginPage = () => ui({ Form: form });

export { LoginPage };
