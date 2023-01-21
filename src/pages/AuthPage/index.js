import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Form } from '../../entities/Form';
import './style.scss';
import { TextButton } from '../../shared/ui/TextButton';

const inputs = Input({
  inputId: 'email-input', placeholder: 'Почта', inputName: 'email', inputType: 'email',
})
  + Input({ inputId: 'login-input', placeholder: 'Логин', inputName: 'login' })
  + Input({ inputId: 'name-input', placeholder: 'Имя', inputName: 'first_name' })
  + Input({ inputId: 'second-name-input', placeholder: 'Фамилия', inputName: 'second_name' })
  + Input({
    inputId: 'phone-input', placeholder: 'Телефон', inputName: 'phone', inputType: 'phone',
  })
  + Input({ inputId: 'password-input', placeholder: 'Пароль', inputName: 'password' })
  + Input({ inputId: 'second-password-input', placeholder: 'Пароль (ещё раз)', inputName: 'password' });

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
