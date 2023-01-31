import { AvatarComponent } from '../../shared/ui/Avatar/AvatarComponent';

export type TemplateProps = {
  title: string,
  lastMessage: string,
  avatar: AvatarComponent,
  time: string,
  counter: string,
}

export type ChatProps = TemplateProps & {
  className: string;
}
