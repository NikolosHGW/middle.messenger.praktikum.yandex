import { Input } from '../../shared/ui/Input';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { EditProfilePageComponent } from './EditProfilePageComponent';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { getInputTarget } from '../../shared/utils/helpers';
import {
  emailRegex,
  loginRegexString,
  nameRegex,
  phoneRegex,
} from '../../shared/utils/constants';
import {
  withDisplayNameInput,
  withEmailInput,
  withFirstNameInput,
  withLoginInput,
  withPhoneInput,
  withSecondNameInput,
} from './connectors';
import { UserController } from '../../shared/api/controllers/UserController';
import { store } from '../../shared/lib/Store';
import { PlainObject } from '../../shared/utils/types/types';

const resultForm = {
  email: '',
  login: '',
  firstName: '',
  secondName: '',
  displayName: '',
  phone: '',
};

const emailInput = (value = '') => withEmailInput(Input)({
  inputId: 'email-input',
  placeholder: '',
  inputName: 'email',
  inputType: 'email',
  spanText: 'Почта',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: emailRegex.source,
  value,
  events: {
    change: (evt: Event) => {
      resultForm.email = getInputTarget(evt.target).value;
    },
  },
});

const loginInput = (value = '') => withLoginInput(Input)({
  inputId: 'login-input',
  placeholder: '',
  inputName: 'login',
  spanText: 'Логин',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: loginRegexString,
  value,
  events: {
    change: (evt: Event) => {
      resultForm.login = getInputTarget(evt.target).value;
    },
  },
});

const nameInput = (value = '') => withFirstNameInput(Input)({
  inputId: 'name-input',
  placeholder: '',
  inputName: 'first_name',
  spanText: 'Имя',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: nameRegex,
  value,
  events: {
    change: (evt: Event) => {
      resultForm.firstName = getInputTarget(evt.target).value;
    },
  },
});

const secondNameInput = (value = '') => withSecondNameInput(Input)({
  inputId: 'second-name-input',
  placeholder: '',
  inputName: 'second_name',
  spanText: 'Фамилия',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: nameRegex,
  value,
  events: {
    change: (evt: Event) => {
      resultForm.secondName = getInputTarget(evt.target).value;
    },
  },
});

const displayNameInput = (value = '') => withDisplayNameInput(Input)({
  inputId: 'display-name-input',
  placeholder: '',
  inputName: 'display_name',
  inputType: 'text',
  spanText: 'Имя в чате',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: nameRegex,
  value,
  events: {
    change: (evt: Event) => {
      resultForm.displayName = getInputTarget(evt.target).value;
    },
  },
});

const phoneInput = (value = '') => withPhoneInput(Input)({
  inputId: 'phone-input',
  placeholder: '',
  inputName: 'phone',
  inputType: 'phone',
  spanText: 'Телефон',
  withEditSpan: true,
  className: 'edit-label',
  inputClassName: 'edit-label__input',
  pattern: phoneRegex.source,
  value,
  events: {
    change: (evt: Event) => {
      resultForm.phone = getInputTarget(evt.target).value;
    },
  },
});

const getInputs = (data: PlainObject) => [
  emailInput(data.email),
  loginInput(data.login),
  nameInput(data.first_name),
  secondNameInput(data.second_name),
  displayNameInput(data.display_name),
  phoneInput(data.phone),
];

const profileContainer = (userData: PlainObject) => ProfileContainer({
  avatar: Avatar(),
  title: '',
  formName: 'profile',
  inputs: getInputs(userData),
  buttons: [Button({ text: 'Сохранить', buttonType: 'submit' })],
  events: {
    submit: (evt: Event) => {
      evt.preventDefault();
      // UserController.getUser();
    },
  },
});

const EditProfilePage = () => {
  const userData = {};
  const userDataFromStore = store.getState().user;
  if (userDataFromStore?.id) {
    Object.assign(userData, userDataFromStore);
  } else {
    UserController.getUser();
  }

  return new EditProfilePageComponent({
    ProfileContainer: profileContainer(userData),
  });
};

export { EditProfilePage };
