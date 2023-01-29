import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { FormComponent } from './FormComponent';

const Form = ({
  title = 'Вход',
  formName = 'authForm',
  inputs = [Input(), Input()],
  buttons = [Button()],
  className = 'form-container',
} = {}) => new FormComponent({
  title,
  formName,
  inputs,
  buttons,
  attributes: { class: className },
});

export { Form };
