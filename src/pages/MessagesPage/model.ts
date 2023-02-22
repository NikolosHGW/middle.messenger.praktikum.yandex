import { TextButton } from '../../shared/ui/TextButton';
import { MessagesPageComponent } from './MessagesPageComponent';
import { ChatList } from '../../features/ChatList';
import { MessageWindow } from '../../features/MessageWindow';
import { getInputTarget, linkTo } from '../../shared/utils/helpers';
import { PROFILE_URL } from '../../shared/utils/constants';
import { Button } from '../../shared/ui/Button';
import { store } from '../../shared/lib/Store';
import { functionConnect } from '../../shared/lib/functionConnect';
import { PlainObject } from '../../shared/utils/types/types';
import { Input } from '../../shared/ui/Input';
import { ChatController } from '../../shared/api/controllers/ChatController';
import { AuthController } from '../../shared/api/controllers/AuthController';
import { StoreEvents } from '../../shared/lib/Store/utils';

let titleChat = 'Новый чат';

const MessagesPage = () => {
  ChatController.getChats();
  AuthController.getUser();
  const messageWindow = MessageWindow();
  store.on(StoreEvents.Updated, () => {
    const { currentChat } = store.getState();
    const element = messageWindow.getContent();
    if (currentChat) {
      element.removeAttribute('style');
    } else {
      element.setAttribute('style', 'display: none');
    }
  });

  return new MessagesPageComponent({
    profileButton: TextButton({
      text: 'Профиль',
      className: 'text-button text-button_color_gray messages_text-button',
      events: {
        click: linkTo(PROFILE_URL),
      },
    }),
    createButton: Button({
      classButton: 'create',
      text: '+',
      events: {
        click: (evt: Event) => {
          const buttonTarget = (evt.target as HTMLButtonElement);
          if (buttonTarget.textContent?.trim() === '+') {
            store.set('chatList.isCreateMode', true);
            buttonTarget.textContent = 'x';
          } else {
            store.set('chatList.isCreateMode', false);
            buttonTarget.textContent = '+';
          }
        },
      },
    }),
    inputTitleChat: Input({
      placeholder: 'Название чата',
      events: {
        input: (evt: Event) => {
          titleChat = getInputTarget(evt.target).value;
        },
      },
    }),
    sendButton: Button({
      text: 'Создать',
      events: {
        click: () => {
          ChatController.createChat(titleChat);
        },
      },
    }),
    isCreateMode: false,
    chatList: ChatList({}),
    messageWindow,
    className: 'messages',
  });
};

const withIsCreateMode = functionConnect(
  (state: PlainObject) => ({
    isCreateMode: state.chatList?.isCreateMode,
    withoutCurrentChat: !state.currentChat,
  }),
);

const messagesPageFunc = withIsCreateMode(MessagesPage);

export { messagesPageFunc as MessagesPage };
