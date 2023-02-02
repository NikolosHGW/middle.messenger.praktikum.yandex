import { Form } from '../../entities/Form';
import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';
import { logInputValueToConsole } from '../../shared/utils/helpers';

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  events: { input: (evt: Event) => logInputValueToConsole(evt) },
});

const passwordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Пароль',
  inputName: 'password',
});

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
