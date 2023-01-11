import Handlebars from 'handlebars';
import ui from './ui.hbs';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import './style.scss';

const Form = () => ui({ formName: 'authForm', title:'Вход', Inputs: Input(), Buttons: Button() });

Handlebars.registerPartial('Form', Form);

export { Form };
