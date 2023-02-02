import { AvatarComponent } from '../../shared/ui/Avatar/AvatarComponent';
import { InputComponent } from '../../shared/ui/Input/InputComponent';
import { EventsPropType } from '../../shared/utils/types/types';

export type ProfileContainerProps = {
  avatar: AvatarComponent,
  title: string,
  formName: string,
  inputs: InputComponent[],
  buttons: InputComponent[],
  events: EventsPropType,
  attributes: { class: string },
}
