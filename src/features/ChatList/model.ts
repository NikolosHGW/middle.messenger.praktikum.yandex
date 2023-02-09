import { ChatListComponent } from './ChatListComponent';
import { Chat } from '../../entities/Chat';
import { SearchInput } from '../../shared/ui/SearchInput';

const getDefaultChats = () => [
  Chat(),
  Chat(),
  Chat(),
  Chat(),
  Chat(),
  Chat(),
];

const ChatList = ({
  chats = getDefaultChats(),
  search = SearchInput(),
  className = 'chat-list',
} = {}) => new ChatListComponent({
  chats,
  search,
  className,
});

export { ChatList };
