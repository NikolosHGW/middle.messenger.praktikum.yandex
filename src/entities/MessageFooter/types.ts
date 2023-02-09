import { ButtonComponent } from '../../shared/ui/Button/ButtonComponent';
import { MessageInputComponent } from '../../shared/ui/MessageInput/MessageInputComponent';

type TemplateProps = {
  attachButton: ButtonComponent;
  messageInput: MessageInputComponent;
  sendButton: ButtonComponent;
}

export type TemplateType = (props: TemplateProps) => string

export type MessageFooterProps = TemplateProps & {
  className: string;
}
