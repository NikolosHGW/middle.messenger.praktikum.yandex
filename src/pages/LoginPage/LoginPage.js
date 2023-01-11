import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input/Input';
import './style.scss';
import { Button } from '../../shared/ui/Button';

const LoginPage = () => ui({ Button: Button() });

export { LoginPage };
