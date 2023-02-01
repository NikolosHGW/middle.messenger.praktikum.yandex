import { ChatComponent } from '../../entities/Chat/ChatComponent';
import { SearchInputComponent } from '../../shared/ui/SearchInput/SearchInputComponent';

type TemplateProps = {
  chats: ChatComponent[];
  search: SearchInputComponent;
}

export type TemplateType = (props: TemplateProps) => string

export type ChatListProps = TemplateProps & {
  className: string;
}
