import { LoginPageComponent } from './LoginPageComponent';
import { Input } from '../../shared/ui/Input';

const Form = () => Input({ inputId: 'login-input', placeholder: 'ЛогинОПА!', inputName: 'login' });

const LoginPage = () => new LoginPageComponent({ Form: Form() });

export { LoginPage };
