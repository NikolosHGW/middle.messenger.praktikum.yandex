import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { FormComponent } from './FormComponent';

const Form = ({
  title = 'Вход',
  formName = 'authForm',
  inputs = [Input(), Input()],
  buttons = [Button()],
  className = 'form-container',
  headingClassName = 'form-container__heading',
  formClassName = 'form',
  fieldsetClassName = 'form__fieldset',
} = {}) => new FormComponent({
  title,
  formName,
  headingClassName,
  formClassName,
  fieldsetClassName,
  inputs,
  buttons,
  attributes: { class: className },
});

export { Form };
