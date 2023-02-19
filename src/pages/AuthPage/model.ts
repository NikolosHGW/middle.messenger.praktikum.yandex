import { Form } from '../../entities/Form';
import { AuthPageComponent } from './AuthPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';
import {
  getInputTarget,
  linkTo,
} from '../../shared/utils/helpers';
import {
  emailRegex, loginRegexString, LOGIN_URL, nameRegex, passwordRegex, phoneRegex,
} from '../../shared/utils/constants';
import { FormValidator } from '../../shared/lib/FormValidator';
import { AuthController } from '../../shared/api/controllers/AuthController';

const resultForm = {
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  phone: '',
  password: '',
  second_password: '',
};

const emailInput = () => Input({
  inputId: 'email-input',
  placeholder: 'Почта',
  inputName: 'email',
  inputType: 'email',
  pattern: emailRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.email = getInputTarget(evt.target).value;
    },
  },
});

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

const nameInput = () => Input({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
  pattern: nameRegex,
  events: {
    change: (evt: Event) => {
      resultForm.first_name = getInputTarget(evt.target).value;
    },
  },
});

const secondNameInput = () => Input({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
  pattern: nameRegex,
  events: {
    change: (evt: Event) => {
      resultForm.second_name = getInputTarget(evt.target).value;
    },
  },
});

const phoneInput = () => Input({
  inputId: 'phone-input',
  placeholder: 'Телефон',
  inputName: 'phone',
  inputType: 'phone',
  pattern: phoneRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.phone = getInputTarget(evt.target).value;
    },
  },
});

const passwordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Пароль',
  inputName: 'password',
  pattern: passwordRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.password = getInputTarget(evt.target).value;
    },
  },
});

const secondPassword = () => Input({
  inputId: 'second-password-input',
  placeholder: 'Пароль (ещё раз)',
  inputName: 'password',
  pattern: passwordRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.second_password = getInputTarget(evt.target).value;
    },
  },
});

const buttonLogin = () => Button({ text: 'Зарегистрироваться', buttonType: 'submit' });

const buttonAuthLink = () => TextButton({
  text: 'Войти',
  className: 'text-button form__text-button',
  events: {
    click: linkTo(LOGIN_URL),
  },
});

const getInputs = () => [
  emailInput(),
  loginInput(),
  nameInput(),
  secondNameInput(),
  phoneInput(),
  passwordInput(),
  secondPassword(),
];

const form = () => {
  const formObject = Form({
    title: 'Регистрация',
    formName: 'auth',
    inputs: getInputs(),
    buttons: [buttonLogin(), buttonAuthLink()],
    events: {
      submit: (evt: Event) => {
        evt.preventDefault();
        AuthController.signup(resultForm);
      },
    },
  });

  const authFormValid = new FormValidator({
    inputSelector: '.label__input',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'label__input_type_error',
    errorClass: 'error-span_active',
  }, formObject.getContent().querySelector('.form') as HTMLFormElement);

  authFormValid.enableValidation();

  return formObject;
};

const AuthPage = () => new AuthPageComponent({ Form: form() });

export { AuthPage };
