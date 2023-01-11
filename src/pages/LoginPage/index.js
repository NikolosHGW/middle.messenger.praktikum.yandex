import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Form } from '../../entities/Form';
import './style.scss';

const LoginPage = () => ui({ Form: Form() });

export { LoginPage };
