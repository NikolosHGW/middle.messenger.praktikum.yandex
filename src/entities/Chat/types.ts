import { AvatarComponent } from '../../shared/ui/Avatar/AvatarComponent';
import { EventsPropType } from '../../shared/utils/types/types';

export type TemplateProps = {
  title: string,
  lastMessage: string,
  avatar: AvatarComponent,
  time: string,
  counter: string,
  events: EventsPropType,
  chatId: number,
}

export type ChatProps = TemplateProps & {
  className: string;
}
