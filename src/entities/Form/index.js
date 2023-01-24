import ui from './ui.hbs';
import { InputTemplier } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import './style.scss';

const Form = (
  props = {
    title: 'Вход',
    formName: 'authForm',
    Inputs: InputTemplier(),
    Buttons: Button(),
  },
) => ui(props);

export { Form };
