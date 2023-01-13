import ui from './ui.hbs';
import './style.scss';
import { EditInput } from '../../shared/ui/EditInput';

const ProfilePage = (props) => ui({ Input: EditInput() });

export { ProfilePage };
