import ui from './ui.hbs';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { InputTemplier } from '../../shared/ui/Input';
import './style.scss';

const ProfileContainer = (
  props = {
    avatar: Avatar(),
    title: 'Иван',
    formName: 'profile',
    Inputs: InputTemplier(),
    Buttons: Button(),
  },
) => ui(props);

export { ProfileContainer };
