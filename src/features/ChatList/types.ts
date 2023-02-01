import { ChatComponent } from '../../entities/Chat/ChatComponent';
import { Block } from '../../shared/lib/Block';

type TemplateProps = {
  chats: ChatComponent[];
  search: Block;
}

export type TemplateType = (props: TemplateProps) => string

export type ChatListProps = TemplateProps & {
  className: string;
}
