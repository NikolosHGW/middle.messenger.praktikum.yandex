import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input/Input';
import './style.scss';

const LoginPage = () => ui({ input: Input() });

export { LoginPage };
