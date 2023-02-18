import { Input } from '../../shared/ui/Input';
import { TextButton } from '../../shared/ui/TextButton';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { ProfilePageComponent } from './ProfilePageComponent';
import { Avatar } from '../../shared/ui/Avatar';
import { linkTo } from '../../shared/utils/helpers';
import { EDIT_PASSWORD_URL, EDIT_PROFILE_URL } from '../../shared/utils/constants';
import { UserController } from '../../shared/api/controllers/UserController';
import {
  withDisplayNameInput,
  withEmailInput,
  withFirstNameInput,
  withLoginInput,
  withPhoneInput,
  withSecondNameInput,
  withTitle,
} from './connectors';

const emailInput = () => withEmailInput(Input)({
  inputId: 'email-input',
  placeholder: 'Почта',
  inputName: 'email',
  inputType: 'email',
  spanText: 'Почта',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  disabled: true,
});

const loginInput = () => withLoginInput(Input)({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  spanText: 'Логин',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  disabled: true,
});

const nameInput = () => withFirstNameInput(Input)({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
  spanText: 'Имя',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  disabled: true,
});

const secondNameInput = () => withSecondNameInput(Input)({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
  spanText: 'Фамилия',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  disabled: true,
});

const displayNameInput = () => withDisplayNameInput(Input)({
  inputId: 'display-name-input',
  placeholder: 'Имя в чате',
  inputName: 'display_name',
  inputType: 'phone',
  spanText: 'Имя в чате',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  disabled: true,
});

const phoneInput = () => withPhoneInput(Input)({
  inputId: 'phone-input',
  placeholder: 'Телефон',
  inputName: 'phone',
  inputType: 'phone',
  spanText: 'Телефон',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  disabled: true,
});

const editTextButton = () => TextButton({
  text: 'Изменить Данные',
  events: {
    click: linkTo(EDIT_PROFILE_URL),
  },
});

const editPasswordTextButton = () => TextButton({
  text: 'Изменить пароль',
  events: {
    click: linkTo(EDIT_PASSWORD_URL),
  },
});

const exitPasswordTextButton = () => TextButton({
  text: 'Выйти',
  events: {
    click: () => UserController.logout(),
  },
  className: 'text-button form__text-button text-button_color_red',
});

const getInputs = () => [
  emailInput(),
  loginInput(),
  nameInput(),
  secondNameInput(),
  displayNameInput(),
  phoneInput(),
];

const getButtons = () => [
  editTextButton(),
  editPasswordTextButton(),
  exitPasswordTextButton(),
];

const profileContainer = () => withTitle(ProfileContainer)({
  avatar: Avatar(),
  title: '',
  formName: 'profile',
  inputs: getInputs(),
  buttons: getButtons(),
});

const ProfilePage = () => {
  UserController.getUser();
  return new ProfilePageComponent({ ProfileContainer: profileContainer() });
};

export { ProfilePage };
