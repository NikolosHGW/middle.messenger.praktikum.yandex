import { ChatListComponent } from '../../features/ChatList/ChatListComponent';
import { MessageWindowComponent } from '../../features/MessageWindow/MessageWindowComponent';
import { ButtonComponent } from '../../shared/ui/Button/ButtonComponent';
import { InputComponent } from '../../shared/ui/Input/InputComponent';
import { TextButtonComponent } from '../../shared/ui/TextButton/TextButtonComponent';

type TemplateProps = {
  profileButton: TextButtonComponent;
  createButton: ButtonComponent;
  chatList: ChatListComponent;
  messageWindow: MessageWindowComponent;
  inputTitleChat: InputComponent;
  sendButton: ButtonComponent;
  isCreateMode: boolean;
}

export type TemplateType = (props: TemplateProps) => string;

export type MessagesPageProps = TemplateProps & { className: string }
