import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { EditPasswordPageComponent } from './EditPasswordPageComponent';
import { getInputTarget } from '../../shared/utils/helpers';
import { passwordRegex } from '../../shared/utils/constants';
import { UserController } from '../../shared/api/controllers/UserController';

const resultForm = {
  oldPassword: '',
  newPassword: '',
  repeatNewPassword: '',
};

const oldPasswordInput = () => Input({
  inputId: 'old-password-input',
  placeholder: 'Старый пароль',
  inputName: 'old_password',
  inputType: 'password',
  spanText: 'Старый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: passwordRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.oldPassword = getInputTarget(evt.target).value;
    },
  },
});

const newPasswordInput = () => Input({
  inputId: 'password-input',
  placeholder: 'Новый пароль',
  inputName: 'new_password',
  inputType: 'password',
  spanText: 'Новый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: passwordRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.newPassword = getInputTarget(evt.target).value;
    },
  },
});

const repeatPasswordInput = () => Input({
  inputId: 'repeat-password-input',
  placeholder: 'Повторите новый пароль',
  inputName: 'repeat_password',
  inputType: 'password',
  spanText: 'Повторите новый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: passwordRegex.source,
  events: {
    change: (evt: Event) => {
      resultForm.repeatNewPassword = getInputTarget(evt.target).value;
    },
  },
});

const getInputs = () => [
  oldPasswordInput(),
  newPasswordInput(),
  repeatPasswordInput(),
];

const profileContainer = () => ProfileContainer({
  avatar: Avatar(),
  title: '',
  formName: 'profile',
  inputs: getInputs(),
  buttons: [Button({ text: 'Сохранить', buttonType: 'submit' })],
  events: {
    submit: (evt: Event) => {
      evt.preventDefault();
      const { oldPassword, newPassword } = resultForm;
      UserController.editPassword({ oldPassword, newPassword });
    },
  },
});

const EditPasswordPage = () => new EditPasswordPageComponent({
  ProfileContainer: profileContainer(),
});

export { EditPasswordPage };
