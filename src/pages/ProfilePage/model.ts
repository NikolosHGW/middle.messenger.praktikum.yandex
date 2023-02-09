import { Input } from '../../shared/ui/Input';
import { TextButton } from '../../shared/ui/TextButton';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { ProfilePageComponent } from './ProfilePageComponent';
import { Avatar } from '../../shared/ui/Avatar';

const emailInput = () => Input({
  inputId: 'email-input',
  placeholder: 'Почта',
  inputName: 'email',
  inputType: 'email',
  spanText: 'Почта',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  spanText: 'Логин',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const nameInput = () => Input({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
  spanText: 'Имя',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const secondNameInput = () => Input({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
  spanText: 'Фамилия',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const displayNameInput = () => Input({
  inputId: 'display-name-input',
  placeholder: 'Имя в чате',
  inputName: 'display_name',
  inputType: 'phone',
  spanText: 'Имя в чате',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const phoneInput = () => Input({
  inputId: 'phone-input',
  placeholder: 'Телефон',
  inputName: 'phone',
  inputType: 'phone',
  spanText: 'Телефон',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
});

const editTextButton = () => TextButton({
  text: 'Изменить Данные', href: 'edit',
});

const editPasswordTextButton = () => TextButton({
  text: 'Изменить пароль', href: 'password',
});

const exitPasswordTextButton = () => TextButton({
  text: 'Выйти',
  href: 'messages',
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

const profileContainer = () => ProfileContainer({
  avatar: Avatar(),
  title: 'Иван',
  formName: 'profile',
  inputs: getInputs(),
  buttons: getButtons(),
});

const ProfilePage = () => new ProfilePageComponent({ ProfileContainer: profileContainer() });

export { ProfilePage };
