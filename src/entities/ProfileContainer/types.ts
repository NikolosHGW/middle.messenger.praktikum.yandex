import { ButtonComponent } from '../../shared/ui/Button/ButtonComponent';
import { InputComponent } from '../../shared/ui/Input/InputComponent';
import { FormComponent } from '../Form/FormComponent';

export type ProfileContainerProps = {
  title: string,
  formName: string,
  headingClassNameForForm: string,
  formClassNameForForm: string,
  fieldsetClassNameForForm: string,
  inputs: InputComponent[],
  buttons: ButtonComponent[],
  form: FormComponent,
  attributes: { class: string },
}
