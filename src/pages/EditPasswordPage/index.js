import ui from './ui.hbs';
import { Avatar } from '../../shared/ui/Avatar';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { Input } from '../../shared/ui/Input';
import './style.scss';
import { Button } from '../../shared/ui/Button';

const inputs = Input({
  inputId: 'old-password-input', placeholder: 'Старый пароль', inputName: 'oldPassword', inputType: 'password', spanText: 'Старый пароль',
})
+ Input({
  inputId: 'password-input', placeholder: 'Новый пароль', inputName: 'newPassword', inputType: 'password', spanText: 'Новый пароль',
})
+ Input({
  inputId: 'repeat-password-input', placeholder: 'Повторите новый пароль', inputName: 'newPassword', inputType: 'password', spanText: 'Повторите новый пароль',
});

const EditPasswordPage = () => ui({
  ProfileContainer: ProfileContainer({
    avatar: Avatar(),
    formName: 'profile',
    Inputs: inputs,
    Buttons: Button({ text: 'Сохранить' }),
  }),
});

export { EditPasswordPage };
