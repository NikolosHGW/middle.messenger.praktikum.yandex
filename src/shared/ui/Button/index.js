import Handlebars from 'handlebars';
import ui from './ui.hbs';
import './style.scss';

const Button = () => ui({ text: 'Авторизоваться', buttonType: 'button' });

Handlebars.registerPartial('Button', Button);

export { Button };
