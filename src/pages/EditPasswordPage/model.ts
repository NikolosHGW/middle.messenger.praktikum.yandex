import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { EditPasswordPageComponent } from './EditPasswordPageComponent';
import { getInputTarget, logObjectToConsole } from '../../shared/utils/helpers';

const resultForm = {
  oldPassword: '',
  newPassword: '',
  repeatNewPassword: '',
};

const oldPasswordInput = () => Input({
  inputId: 'old-password-input',
  placeholder: 'Старый пароль',
  inputName: 'oldPassword',
  inputType: 'password',
  spanText: 'Старый пароль',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  events: {
    change: (evt: Event) => {
      resultForm.oldPassword = getInputTarget(evt.target).value;
    },
  },
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
  events: {
    change: (evt: Event) => {
      resultForm.newPassword = getInputTarget(evt.target).value;
    },
  },
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
      logObjectToConsole(resultForm);
    },
  },
});

const EditPasswordPage = () => new EditPasswordPageComponent({
  ProfileContainer: profileContainer(),
});

export { EditPasswordPage };
