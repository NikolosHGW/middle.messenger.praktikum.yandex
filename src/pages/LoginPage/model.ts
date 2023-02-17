import { Form } from '../../entities/Form';
import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';
import {
  getInputTarget,
  linkTo,
} from '../../shared/utils/helpers';
import { List } from '../../shared/ui/List';
import {
  AUTH_URL,
  EDIT_PASSWORD_URL,
  EDIT_PROFILE_URL,
  ERROR_URL,
  loginRegexString,
  MESSAGE_URL,
  NOT_FOUND_URL,
  passwordRegex,
  PROFILE_URL,
} from '../../shared/utils/constants';
import { UserController } from '../../shared/api/controllers/UserController';
import { FormValidator } from '../../shared/lib/FormValidator';

const resultForm = {
  login: '',
  password: '',
};

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  pattern: loginRegexString,
  events: {
    change: (evt: Event) => {
      resultForm.login = getInputTarget(evt.target).value;
    },
  },
});

const passwordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Пароль',
  inputName: 'password',
  inputType: 'password',
  pattern: passwordRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.password = getInputTarget(evt.target).value;
    },
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

const form = () => {
  const formObject = Form({
    title: 'Вход',
    formName: 'login',
    inputs: [loginInput(), passwordInput()],
    buttons: [buttonLogin(), buttonAuthLink()],
    events: {
      submit: (evt: Event) => {
        evt.preventDefault();
        UserController.login(resultForm);
      },
    },
  });

  const loginFormValid = new FormValidator({
    inputSelector: '.label__input',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'label__input_type_error',
    errorClass: 'error-span_active',
  }, formObject.getContent().querySelector('.form') as HTMLFormElement);

  loginFormValid.enableValidation();

  return formObject;
};

const LoginPage = () => new LoginPageComponent({ Form: form(), links: getList() });

export { LoginPage };
