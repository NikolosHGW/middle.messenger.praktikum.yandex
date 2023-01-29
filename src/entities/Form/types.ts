import { ButtonComponent } from '../../shared/ui/Button/ButtonComponent';
import { InputComponent } from '../../shared/ui/Input/InputComponent';

type FormProps = {
  title: string,
  formName: string,
  inputs: Array<InputComponent>,
  buttons: Array<ButtonComponent>,
  attributes: { class: string },
}

export { FormProps };
