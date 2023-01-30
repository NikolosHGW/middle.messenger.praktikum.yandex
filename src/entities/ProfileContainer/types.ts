import { AvatarComponent } from '../../shared/ui/Avatar/AvatarComponent';
import { InputComponent } from '../../shared/ui/Input/InputComponent';

export type ProfileContainerProps = {
  avatar: AvatarComponent,
  title: string,
  formName: string,
  inputs: InputComponent[],
  buttons: InputComponent[],
  attributes: { class: string },
}
