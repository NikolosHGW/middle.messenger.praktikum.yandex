import ui from './ui.hbs';
import { Input } from '../../shared/Input/Input';
import './style.scss';

const LoginPage = () => ui({ input: Input() });

export { LoginPage };
