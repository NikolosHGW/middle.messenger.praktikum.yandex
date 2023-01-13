import ui from './ui.hbs';
import './style.scss';
import { TextButton } from '../../shared/ui/TextButton';

const ProfilePage = (props) => ui({ Button: TextButton() });

export { ProfilePage };
