import { ChatListComponent } from './ChatListComponent';
import { Chat } from '../../entities/Chat';
import { SearchInput } from '../../shared/ui/SearchInput';
import { UserController } from '../../shared/api/controllers/UserController';
import { debounce, getInputTarget } from '../../shared/utils/helpers';
import { functionConnect } from '../../shared/lib/functionConnect';
import { ChatType } from '../../shared/utils/types/types';
import { Avatar } from '../../shared/ui/Avatar';
import { RESOURCE_URL } from '../../shared/utils/constants';
import { store } from '../../shared/lib/Store';
import { ChatController } from '../../shared/api/controllers/ChatController';
import { addNewSocketToStore } from '../../shared/lib/Socket';

const withChats = functionConnect(
  (state) => ({
    chats: state.chats?.map((chat: ChatType) => (
      Chat({
        title: chat.title,
        avatar: Avatar({
          className: 'personal-image chat__personal-image',
          withButton: false,
          img: chat.avatar ? `${RESOURCE_URL}${chat.avatar}` : undefined,
        }),
        lastMessage: chat.last_message?.content,
        time: chat.last_message?.time,
        counter: chat.unread_count.toString(),
        chatId: chat.id,
        events: {
          click: async () => {
            store.set('currentChat', { ...chat });
            await ChatController.getToken(chat.id);
            const { token } = store.getState();
            const userId = store.getState().user?.id ?? 527818;
            addNewSocketToStore(userId, chat.id, token);
          },
        },
      })
    )),
  }),
);

const ChatList = ({
  chats = [],
  search = SearchInput({
    events: {
      keyup: debounce((evt: Event) => {
        UserController.searchUser({ login: getInputTarget(evt.target).value });
      }),
    },
  }),
  className = 'chat-list',
} = {}) => new ChatListComponent({
  chats,
  search,
  className,
});

const chatListComponent = withChats(ChatList);

export { chatListComponent as ChatList };
