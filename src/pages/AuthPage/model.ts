import { Form } from '../../entities/Form';
import { AuthPageComponent } from './AuthPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';

const emailInput = () => Input({
  inputId: 'email-input',
  placeholder: 'Почта',
  inputName: 'email',
  inputType: 'email',
});

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
});

const nameInput = () => Input({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
});

const secondNameInput = () => Input({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
});

const phoneInput = () => Input({
  inputId: 'phone-input',
  placeholder: 'Телефон',
  inputName: 'phone',
  inputType: 'phone',
});

const passwordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Пароль',
  inputName: 'password',
});

const secondPassword = () => Input({
  inputId: 'second-password-input',
  placeholder: 'Пароль (ещё раз)',
  inputName: 'password',
});

const buttonLogin = () => Button({ text: 'Зарегистрироваться' });

const buttonAuthLink = () => TextButton({
  text: 'Войти',
  className: 'text-button form__text-button',
  href: '/',
});

const inputs = [
  emailInput(),
  loginInput(),
  nameInput(),
  secondNameInput(),
  phoneInput(),
  passwordInput(),
  secondPassword(),
];

const form = () => Form({
  title: 'Регистрация',
  formName: 'auth',
  inputs,
  buttons: [buttonLogin(), buttonAuthLink()],
});

const AuthPage = () => new AuthPageComponent({ Form: form() });

export { AuthPage };
