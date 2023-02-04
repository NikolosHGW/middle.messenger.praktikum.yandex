import { Form } from '../../entities/Form';
import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { TextButton } from '../../shared/ui/TextButton';
import { getInputTarget, logObjectToConsole } from '../../shared/utils/helpers';
import { Validation } from '../../shared/lib/Validation/Validation';
import { InputType } from '../../shared/lib/Validation/types';

const validate = (type: InputType) => (evt: Event) => {
  Validation.hadleInputEvent(evt, type);
};

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

const form = () => Form({
  title: 'Вход',
  formName: 'login',
  inputs: [loginInput(), passwordInput()],
  buttons: [buttonLogin(), buttonAuthLink()],
  events: {
    submit: (evt: Event) => {
      evt.preventDefault();
      logObjectToConsole(resultForm);
    },
  },
});

const LoginPage = () => new LoginPageComponent({ Form: form() });

export { LoginPage };
