import ui from './ui.hbs';
import { InputTemplier } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Form } from '../../entities/Form';
import './style.scss';
import { TextButton } from '../../shared/ui/TextButton';

const inputs = InputTemplier({
  inputId: 'email-input', placeholder: 'Почта', inputName: 'email', inputType: 'email',
})
  + InputTemplier({ inputId: 'login-input', placeholder: 'Логин', inputName: 'login' })
  + InputTemplier({ inputId: 'name-input', placeholder: 'Имя', inputName: 'first_name' })
  + InputTemplier({ inputId: 'second-name-input', placeholder: 'Фамилия', inputName: 'second_name' })
  + InputTemplier({
    inputId: 'phone-input', placeholder: 'Телефон', inputName: 'phone', inputType: 'phone',
  })
  + InputTemplier({ inputId: 'password-input', placeholder: 'Пароль', inputName: 'password' })
  + InputTemplier({ inputId: 'second-password-input', placeholder: 'Пароль (ещё раз)', inputName: 'password' });

const buttons = Button({ text: 'Зарегистрироваться' }) + TextButton({
  text: 'Войти',
  buttonType: 'button',
  ariaLabel: 'login',
  classButton: 'text-button form__text-button',
});

const form = Form(
  {
    title: 'Регистрация',
    formName: 'auth',
    Inputs: inputs,
    Buttons: buttons,
  },
);

const AuthPage = () => ui({ Form: form });

export { AuthPage };
