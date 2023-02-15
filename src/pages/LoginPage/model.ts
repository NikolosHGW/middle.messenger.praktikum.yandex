import { Form } from '../../entities/Form';
import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';
import {
  getInputTarget,
  linkTo,
  logObjectToConsole,
  validate,
} from '../../shared/utils/helpers';
import { Validation } from '../../shared/lib/Validation/Validation';
import { List } from '../../shared/ui/List';
import {
  AUTH_URL,
  EDIT_PASSWORD_URL,
  EDIT_PROFILE_URL,
  ERROR_URL,
  MESSAGE_URL,
  NOT_FOUND_URL,
  PROFILE_URL,
} from '../../shared/utils/constants';
import { UserController } from '../../shared/api/controllers/UserController';

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
  events: {
    click: linkTo(AUTH_URL),
  },
});

const buttonLinkAuth = () => TextButton({
  text: 'Авторизация /auth',
  className: 'text-button',
  events: {
    click: linkTo(AUTH_URL),
  },
});

const buttonLinkMessages = () => TextButton({
  text: 'Сообщения /messages',
  className: 'text-button',
  events: {
    click: linkTo(MESSAGE_URL),
  },
});

const buttonLinkProfile = () => TextButton({
  text: 'Профиль /profile',
  className: 'text-button',
  events: {
    click: linkTo(PROFILE_URL),
  },
});

const buttonLinkEdit = () => TextButton({
  text: 'Изменить профиль /edit',
  className: 'text-button',
  events: {
    click: linkTo(EDIT_PROFILE_URL),
  },
});

const buttonLinkPassword = () => TextButton({
  text: 'Изменить пароль /password',
  className: 'text-button',
  events: {
    click: linkTo(EDIT_PASSWORD_URL),
  },
});

const buttonLinkNotFound = () => TextButton({
  text: '404 /not-found',
  className: 'text-button',
  events: {
    click: linkTo(NOT_FOUND_URL),
  },
});

const buttonLinkError = () => TextButton({
  text: '500 /error',
  className: 'text-button',
  events: {
    click: linkTo(ERROR_URL),
  },
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
      UserController.login(resultForm);
    },
  },
});

const LoginPage = () => new LoginPageComponent({ Form: form(), links: getList() });

export { LoginPage };
