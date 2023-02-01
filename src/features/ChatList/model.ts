import { ChatListComponent } from './ChatListComponent';
import { Chat } from '../../entities/Chat';
import { Input } from '../../shared/ui/Input';

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
  search = Input(),
  className = 'chat-list',
} = {}) => new ChatListComponent({
  chats,
  search,
  className,
});

export { ChatList };
