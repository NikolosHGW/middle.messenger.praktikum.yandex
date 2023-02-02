import { ChatListComponent } from '../../features/ChatList/ChatListComponent';
import { MessageWindowComponent } from '../../features/MessageWindow/MessageWindowComponent';
import { TextButtonComponent } from '../../shared/ui/TextButton/TextButtonComponent';

type TemplateProps = {
  profileButton: TextButtonComponent;
  chatList: ChatListComponent;
  messageWindow: MessageWindowComponent;
}

export type TemplateType = (props: TemplateProps) => string;

export type MessagesPageProps = TemplateProps & { className: string }
