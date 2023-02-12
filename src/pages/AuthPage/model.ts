import { Form } from '../../entities/Form';
import { AuthPageComponent } from './AuthPageComponent';
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
import { LOGIN_URL } from '../../shared/utils/constants';

const resultForm = {
  email: '',
  login: '',
  firstName: '',
  secondName: '',
  phone: '',
  password: '',
  secondPassword: '',
};

const emailInput = () => Input({
  inputId: 'email-input',
  placeholder: 'Почта',
  inputName: 'email',
  inputType: 'email',
  events: {
    change: (evt: Event) => {
      resultForm.email = getInputTarget(evt.target).value;
    },
    focus: validate('email'),
    blur: validate('email'),
  },
});

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

const nameInput = () => Input({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
  events: {
    change: (evt: Event) => {
      resultForm.firstName = getInputTarget(evt.target).value;
    },
    focus: validate('first_name'),
    blur: validate('first_name'),
  },
});

const secondNameInput = () => Input({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
  events: {
    change: (evt: Event) => {
      resultForm.secondName = getInputTarget(evt.target).value;
    },
    focus: validate('second_name'),
    blur: validate('second_name'),
  },
});

const phoneInput = () => Input({
  inputId: 'phone-input',
  placeholder: 'Телефон',
  inputName: 'phone',
  inputType: 'phone',
  events: {
    change: (evt: Event) => {
      resultForm.phone = getInputTarget(evt.target).value;
    },
    focus: validate('phone'),
    blur: validate('phone'),
  },
});

const passwordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Пароль',
  inputName: 'password',
  events: {
    change: (evt: Event) => {
      resultForm.password = getInputTarget(evt.target).value;
    },
    focus: validate('password'),
    blur: validate('password'),
  },
});

const secondPassword = () => Input({
  inputId: 'second-password-input',
  placeholder: 'Пароль (ещё раз)',
  inputName: 'password',
  events: {
    change: (evt: Event) => {
      resultForm.secondPassword = getInputTarget(evt.target).value;
    },
    focus: validate('password'),
    blur: validate('password'),
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

const form = () => Form({
  title: 'Регистрация',
  formName: 'auth',
  inputs: getInputs(),
  buttons: [buttonLogin(), buttonAuthLink()],
  events: {
    submit: (evt: Event) => {
      evt.preventDefault();
      logObjectToConsole(resultForm);
      Validation.handleSubmit(evt);
    },
  },
});

const AuthPage = () => new AuthPageComponent({ Form: form() });

export { AuthPage };
