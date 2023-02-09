import { ButtonComponent } from '../../shared/ui/Button/ButtonComponent';
import { InputComponent } from '../../shared/ui/Input/InputComponent';
import { EventsPropType } from '../../shared/utils/types/types';

type FormProps = {
  title: string,
  formName: string,
  headingClassName: string,
  formClassName: string,
  fieldsetClassName: string,
  inputs: Array<InputComponent>,
  buttons: Array<ButtonComponent>,
  events: EventsPropType,
  attributes: { class: string },
}

export { FormProps };
