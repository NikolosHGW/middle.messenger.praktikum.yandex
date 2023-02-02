import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { EditProfilePageComponent } from './EditProfilePageComponent';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { getInputTarget, logObjectToConsole } from '../../shared/utils/helpers';

const resultForm = {
  email: '',
  login: '',
  firstName: '',
  secondName: '',
  displayName: '',
  phone: '',
};

const emailInput = () => Input({
  inputId: 'email-input',
  placeholder: 'Почта',
  inputName: 'email',
  inputType: 'email',
  spanText: 'Почта',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  events: {
    change: (evt: Event) => {
      resultForm.email = getInputTarget(evt.target).value;
    },
  },
});

const loginInput = () => Input({
  inputId: 'login-input',
  placeholder: 'Логин',
  inputName: 'login',
  spanText: 'Логин',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  events: {
    change: (evt: Event) => {
      resultForm.login = getInputTarget(evt.target).value;
    },
  },
});

const nameInput = () => Input({
  inputId: 'name-input',
  placeholder: 'Имя',
  inputName: 'first_name',
  spanText: 'Имя',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  events: {
    change: (evt: Event) => {
      resultForm.firstName = getInputTarget(evt.target).value;
    },
  },
});

const secondNameInput = () => Input({
  inputId: 'second-name-input',
  placeholder: 'Фамилия',
  inputName: 'second_name',
  spanText: 'Фамилия',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  events: {
    change: (evt: Event) => {
      resultForm.secondName = getInputTarget(evt.target).value;
    },
  },
});

const displayNameInput = () => Input({
  inputId: 'display-name-input',
  placeholder: 'Имя в чате',
  inputName: 'display_name',
  inputType: 'text',
  spanText: 'Имя в чате',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  events: {
    change: (evt: Event) => {
      resultForm.displayName = getInputTarget(evt.target).value;
    },
  },
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
  events: {
    change: (evt: Event) => {
      resultForm.phone = getInputTarget(evt.target).value;
    },
  },
});

const getInputs = () => [
  emailInput(),
  loginInput(),
  nameInput(),
  secondNameInput(),
  displayNameInput(),
  phoneInput(),
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

const EditProfilePage = () => new EditProfilePageComponent({
  ProfileContainer: profileContainer(),
});

export { EditProfilePage };
