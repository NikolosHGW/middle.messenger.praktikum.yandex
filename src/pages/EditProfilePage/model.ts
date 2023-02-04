import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { EditProfilePageComponent } from './EditProfilePageComponent';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { getInputTarget, logObjectToConsole, validate } from '../../shared/utils/helpers';
import { Validation } from '../../shared/lib/Validation/Validation';

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
    focus: validate('email'),
    blur: validate('email'),
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
    focus: validate('login'),
    blur: validate('login'),
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
    focus: validate('first_name'),
    blur: validate('first_name'),
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
    focus: validate('second_name'),
    blur: validate('second_name'),
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
    focus: validate('display_name'),
    blur: validate('display_name'),
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
    focus: validate('phone'),
    blur: validate('phone'),
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
      Validation.handleSubmit(evt);
    },
  },
});

const EditProfilePage = () => new EditProfilePageComponent({
  ProfileContainer: profileContainer(),
});

export { EditProfilePage };
