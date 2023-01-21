import ui from './ui.hbs';
import { Avatar } from '../../shared/ui/Avatar';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { EditInput } from '../../shared/ui/EditInput';
import './style.scss';
import { Button } from '../../shared/ui/Button';

const inputs = EditInput({
  inputId: 'old-password-input', placeholder: 'Старый пароль', inputName: 'oldPassword', inputType: 'password', spanText: 'Старый пароль',
})
+ EditInput({
  inputId: 'password-input', placeholder: 'Новый пароль', inputName: 'newPassword', inputType: 'password', spanText: 'Новый пароль',
})
+ EditInput({
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
