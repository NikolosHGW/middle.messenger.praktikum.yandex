import { InputComponent } from '../../shared/ui/Input/InputComponent';

export type ProfileContainerProps = {
  avatar: InputComponent,
  title: string,
  formName: string,
  headingClassNameForForm: string,
  formClassNameForForm: string,
  fieldsetClassNameForForm: string,
  inputs: InputComponent[],
  buttons: InputComponent[],
  attributes: { class: string },
}
