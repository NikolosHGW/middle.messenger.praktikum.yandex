import { ChatListComponent } from './ChatListComponent';
import { Chat } from '../../entities/Chat';
import { SearchInput } from '../../shared/ui/SearchInput';
import { UserController } from '../../shared/api/controllers/UserController';
import { getInputTarget } from '../../shared/utils/helpers';

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
  search = SearchInput({
    events: {
      input: (evt: Event) => {
        UserController.searchUser({ login: getInputTarget(evt.target).value });
      },
    },
  }),
  className = 'chat-list',
} = {}) => new ChatListComponent({
  chats,
  search,
  className,
});

export { ChatList };
