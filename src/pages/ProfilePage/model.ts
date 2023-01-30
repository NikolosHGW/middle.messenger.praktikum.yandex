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
});

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  spanText: 'Логин',
  withEditSpan: true,
});

const nameInput = () => Input({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
  spanText: 'Имя',
  withEditSpan: true,
});

const secondNameInput = () => Input({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
  spanText: 'Фамилия',
  withEditSpan: true,
});

const displayNameInput = () => Input({
  inputId: 'display-name-input',
  placeholder: 'Имя в чате',
  inputName: 'display_name',
  inputType: 'phone',
  spanText: 'Имя в чате',
  withEditSpan: true,
});

const phoneInput = () => Input({
  inputId: 'phone-input',
  placeholder: 'Телефон',
  inputName: 'phone',
  inputType: 'phone',
  spanText: 'Телефон',
  withEditSpan: true,
});

// const secondPassword = () => Input({
//   inputId: 'second-password-input',
//   placeholder: 'Пароль (ещё раз)',
//   inputName: 'password',
// });

const editTextButton = () => TextButton({
  text: 'Изменить Данные', href: 'edit',
});

const editPasswordTextButton = () => TextButton({
  text: 'Изменить пароль', href: 'password',
});

const exitPasswordTextButton = () => TextButton({
  text: 'Выйти', href: 'messages',
});

// const buttons = TextButton({ text: 'Изменить Данные', href: 'edit' })
//   + TextButton({ text: 'Изменить пароль', href: 'password' })
//   + TextButton({ text: 'Выйти', isRed: true, href: 'messages' });

const inputs = [
  emailInput(),
  loginInput(),
  nameInput(),
  secondNameInput(),
  displayNameInput(),
  phoneInput(),
];

const buttons = [
  editTextButton(),
  editPasswordTextButton(),
  exitPasswordTextButton(),
];

const profileContainer = () => ProfileContainer({
  avatar: Avatar(),
  title: 'Иван',
  formName: 'profile',
  inputs,
  buttons,
});

const ProfilePage = () => new ProfilePageComponent({ ProfileContainer: profileContainer() });

export { ProfilePage };
