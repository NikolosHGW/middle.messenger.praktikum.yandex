import { AvatarComponent } from '../../shared/ui/Avatar/AvatarComponent';
import { ButtonComponent } from '../../shared/ui/Button/ButtonComponent';

type TemplateProps = {
  avatar: AvatarComponent;
  name: string;
  menuButton: ButtonComponent;
  addUserButton: ButtonComponent;
  deleteUserButton: ButtonComponent;
  needHide: boolean,
  deleteChatButton: ButtonComponent;
}

export type TemplateType = (props: TemplateProps) => string

export type MessageFooterProps = TemplateProps & {
  className: string;
}
