import ui from './ui.hbs';
import './style.scss';
import { Avatar } from '../../shared/ui/Avatar';

const ProfilePage = (props) => ui({ Button: Avatar() });

export { ProfilePage };
