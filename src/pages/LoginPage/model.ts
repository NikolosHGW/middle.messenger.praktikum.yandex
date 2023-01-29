import { Form } from '../../entities/Form/model';
import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';

const loginInput = () => Input({ inputId: 'login-input', placeholder: 'Логин', inputName: 'login' });

const passwordInput = () => Input({ inputId: 'password-input', placeholder: 'Пароль', inputName: 'password' });

const buttonLogin = () => Button({ text: 'Войти' });

const buttonAuthLink = () => TextButton({
  text: 'Нет аккаунта?',
  className: 'text-button form__text-button',
  href: 'auth',
});

const form = () => Form({
  title: 'Вход',
  formName: 'login',
  inputs: [loginInput(), passwordInput()],
  buttons: [buttonLogin(), buttonAuthLink()],
});

const LoginPage = () => new LoginPageComponent({ Form: form() });

export { LoginPage };
