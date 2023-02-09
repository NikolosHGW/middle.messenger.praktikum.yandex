import { Form } from '../../entities/Form';
import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';
import { getInputTarget, logObjectToConsole, validate } from '../../shared/utils/helpers';
import { Validation } from '../../shared/lib/Validation/Validation';
import { List } from '../../shared/ui/List';

const resultForm = {
  login: '',
  password: '',
};

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  events: {
    change: (evt: Event) => {
      resultForm.login = getInputTarget(evt.target).value;
    },
    focus: validate('login'),
    blur: validate('login'),
  },
});

const passwordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Пароль',
  inputName: 'password',
  inputType: 'password',
  events: {
    change: (evt: Event) => {
      resultForm.password = getInputTarget(evt.target).value;
    },
    focus: validate('password'),
    blur: validate('password'),
  },
});

const buttonLogin = () => Button({
  text: 'Войти',
  buttonType: 'submit',
});

const buttonAuthLink = () => TextButton({
  text: 'Нет аккаунта?',
  className: 'text-button form__text-button',
  href: 'auth',
});

const buttonLinkAuth = () => TextButton({
  text: 'Авторизация /auth',
  className: 'text-button',
  href: 'auth',
});

const buttonLinkMessages = () => TextButton({
  text: 'Сообщения /messages',
  className: 'text-button',
  href: 'messages',
});

const buttonLinkProfile = () => TextButton({
  text: 'Профиль /profile',
  className: 'text-button',
  href: 'profile',
});

const buttonLinkEdit = () => TextButton({
  text: 'Изменить профиль /edit',
  className: 'text-button',
  href: 'edit',
});

const buttonLinkPassword = () => TextButton({
  text: 'Изменить пароль /password',
  className: 'text-button',
  href: 'password',
});

const buttonLinkNotFound = () => TextButton({
  text: '404 /not-found',
  className: 'text-button',
  href: 'not-found',
});

const buttonLinkError = () => TextButton({
  text: '500 /error',
  className: 'text-button',
  href: 'error',
});

const getList = () => [
  List({ link: buttonLinkAuth() }),
  List({ link: buttonLinkMessages() }),
  List({ link: buttonLinkProfile() }),
  List({ link: buttonLinkEdit() }),
  List({ link: buttonLinkPassword() }),
  List({ link: buttonLinkNotFound() }),
  List({ link: buttonLinkError() }),
];

const form = () => Form({
  title: 'Вход',
  formName: 'login',
  inputs: [loginInput(), passwordInput()],
  buttons: [buttonLogin(), buttonAuthLink()],
  events: {
    submit: (evt: Event) => {
      evt.preventDefault();
      logObjectToConsole(resultForm);
      Validation.handleSubmit(evt);
    },
  },
});

const LoginPage = () => new LoginPageComponent({ Form: form(), links: getList() });

export { LoginPage };
