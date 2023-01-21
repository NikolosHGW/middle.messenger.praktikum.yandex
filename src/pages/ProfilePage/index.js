import ui from './ui.hbs';
import { Avatar } from '../../shared/ui/Avatar';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { EditInput } from '../../shared/ui/EditInput';
import { TextButton } from '../../shared/ui/TextButton';
import './style.scss';

const inputs = EditInput({
  inputId: 'email-input', placeholder: 'Почта', inputName: 'email', inputType: 'email', spanText: 'Почта',
})
  + EditInput({
    inputId: 'login-input', placeholder: 'Логин', inputName: 'login', spanText: 'Логин',
  })
  + EditInput({
    inputId: 'name-input', placeholder: 'Имя', inputName: 'first_name', spanText: 'Имя',
  })
  + EditInput({
    inputId: 'second-name-input', placeholder: 'Фамилия', inputName: 'second_name', spanText: 'Фамилия',
  })
  + EditInput({
    inputId: 'display-name-input', placeholder: 'Имя в чате', inputName: 'display_name', inputType: 'phone', spanText: 'Имя в чате',
  })
  + EditInput({
    inputId: 'phone-input', placeholder: 'Телефон', inputName: 'phone', inputType: 'phone', spanText: 'Телефон',
  });

const buttons = TextButton({ text: 'Изменить Данные', href: 'edit' })
  + TextButton({ text: 'Изменить пароль', href: 'password' })
  + TextButton({ text: 'Выйти', isRed: true, href: 'messages' });

const ProfilePage = () => ui({
  ProfileContainer: ProfileContainer({
    avatar: Avatar(),
    title: 'Иван',
    formName: 'profile',
    Inputs: inputs,
    Buttons: buttons,
  }),
});

export { ProfilePage };
