import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { EditPasswordPageComponent } from './EditPasswordPageComponent';

const oldPasswordInput = () => Input({
  inputId: 'old-password-input',
  placeholder: 'Старый пароль',
  inputName: 'oldPassword',
  inputType: 'password',
  spanText: 'Старый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const newPasswordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Новый пароль',
  inputName: 'newPassword',
  inputType: 'password',
  spanText: 'Новый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const repeatPasswordInput = () => Input({
  inputId: 'repeat-password-input',
  placeholder: 'Повторите новый пароль',
  inputName: 'newPassword',
  inputType: 'password',
  spanText: 'Повторите новый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const inputs = [
  oldPasswordInput(),
  newPasswordInput(),
  repeatPasswordInput(),
];

const profileContainer = () => ProfileContainer({
  avatar: Avatar(),
  title: '',
  formName: 'profile',
  inputs,
  buttons: [Button({ text: 'Сохранить' })],
});

const EditPasswordPage = () => new EditPasswordPageComponent({
  ProfileContainer: profileContainer(),
});

export { EditPasswordPage };
