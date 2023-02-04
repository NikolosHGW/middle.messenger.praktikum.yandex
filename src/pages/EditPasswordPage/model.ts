import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { EditPasswordPageComponent } from './EditPasswordPageComponent';
import { getInputTarget, logObjectToConsole, validate } from '../../shared/utils/helpers';
import { Validation } from '../../shared/lib/Validation/Validation';

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
  events: {
    change: (evt: Event) => {
      resultForm.oldPassword = getInputTarget(evt.target).value;
    },
    focus: validate('old_password'),
    blur: validate('old_password'),
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
  events: {
    change: (evt: Event) => {
      resultForm.newPassword = getInputTarget(evt.target).value;
    },
    focus: validate('new_password'),
    blur: validate('new_password'),
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
  events: {
    change: (evt: Event) => {
      resultForm.repeatNewPassword = getInputTarget(evt.target).value;
    },
    focus: validate('repeat_password'),
    blur: validate('repeat_password'),
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
      Validation.handleSubmit(evt);
    },
  },
});

const EditPasswordPage = () => new EditPasswordPageComponent({
  ProfileContainer: profileContainer(),
});

export { EditPasswordPage };
