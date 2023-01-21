import ui from './ui.hbs';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import './style.scss';

const ProfileContainer = (
  props = {
    avatar: Avatar(),
    title: 'Иван',
    formName: 'profile',
    Inputs: Input(),
    Buttons: Button(),
  },
) => ui(props);

export { ProfileContainer };
