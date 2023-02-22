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
  RESOURCE_URL,
} from '../../shared/utils/constants';
import {
  withDisplayNameInput,
  withEmailInput,
  withFirstNameInput,
  withLoginInput,
  withPhoneInput,
  withSecondNameInput,
} from './connectors';
import { AuthController } from '../../shared/api/controllers/AuthController';
import { store } from '../../shared/lib/Store';
import { UserData } from '../../shared/utils/types/types';
import { UserController } from '../../shared/api/controllers/UserController';
import { StoreEvents } from '../../shared/lib/Store/utils';
import { withAvatar } from '../../shared/utils/connectors';

const resultForm = {
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
};

let avatar = '';

const addListenerForResultForm = () => {
  store.on(StoreEvents.Updated, () => {
    const userData = store.getState().user;

    resultForm.email = userData?.email ?? '';
    resultForm.login = userData?.login ?? '';
    resultForm.first_name = userData?.first_name ?? '';
    resultForm.second_name = userData?.second_name ?? '';
    resultForm.display_name = userData?.display_name ?? '';
    resultForm.phone = userData?.phone ?? '';

    avatar = userData?.avatar ? `${RESOURCE_URL}${userData.avatar}` : '';
  });
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
      resultForm.first_name = getInputTarget(evt.target).value;
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
      resultForm.second_name = getInputTarget(evt.target).value;
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
      resultForm.display_name = getInputTarget(evt.target).value;
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

const getInputs = (data: UserData) => [
  emailInput(data.email),
  loginInput(data.login),
  nameInput(data.first_name),
  secondNameInput(data.second_name),
  displayNameInput(data.display_name),
  phoneInput(data.phone),
];

const profileContainer = (
  { userData, avatarImg }: { userData: UserData, avatarImg: string },
) => ProfileContainer({
  avatar: withAvatar(Avatar)({
    className: 'personal-image personal-image_big-size',
    img: avatarImg,
    events: {
      input: (evt: Event) => {
        const form = new FormData();
        form.append('avatar', getInputTarget(evt.target).files![0]);
        UserController.editAvatar(form);
      },
    },
  }),
  title: '',
  formName: 'profile',
  inputs: getInputs(userData),
  buttons: [Button({ text: 'Сохранить', buttonType: 'submit' })],
  events: {
    submit: (evt: Event) => {
      evt.preventDefault();
      UserController.editUser(userData);
    },
  },
});

const EditProfilePage = () => {
  addListenerForResultForm();
  const userDataFromStore = store.getState().user;
  if (userDataFromStore?.id) {
    delete userDataFromStore.id;
    avatar = `${RESOURCE_URL}${userDataFromStore.avatar}`;
    delete userDataFromStore.avatar;
    Object.assign(resultForm, userDataFromStore);
  } else {
    AuthController.getUser();
  }

  return new EditProfilePageComponent({
    ProfileContainer: profileContainer({ userData: resultForm, avatarImg: avatar }),
  });
};

export { EditProfilePage };
