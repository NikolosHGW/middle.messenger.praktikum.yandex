import ui from './ui.hbs';
import { Avatar } from '../../shared/ui/Avatar';
import { ProfileContainer } from '../../entities/ProfileContainer';
import { Input } from '../../shared/ui/Input';
import './style.scss';
import { Button } from '../../shared/ui/Button';

const inputs = Input({
  inputId: 'email-input', placeholder: 'Почта', inputName: 'email', inputType: 'email', spanText: 'Почта',
})
  + Input({
    inputId: 'login-input', placeholder: 'Логин', inputName: 'login', spanText: 'Логин',
  })
  + Input({
    inputId: 'name-input', placeholder: 'Имя', inputName: 'first_name', spanText: 'Имя',
  })
  + Input({
    inputId: 'second-name-input', placeholder: 'Фамилия', inputName: 'second_name', spanText: 'Фамилия',
  })
  + Input({
    inputId: 'display-name-input', placeholder: 'Имя в чате', inputName: 'display_name', inputType: 'phone', spanText: 'Имя в чате',
  })
  + Input({
    inputId: 'phone-input', placeholder: 'Телефон', inputName: 'phone', inputType: 'phone', spanText: 'Телефон',
  });

const EditProfilePage = () => ui({
  ProfileContainer: ProfileContainer({
    avatar: Avatar(),
    formName: 'profile',
    Inputs: inputs,
    Buttons: Button({ text: 'Сохранить' }),
  }),
});

export { EditProfilePage };
