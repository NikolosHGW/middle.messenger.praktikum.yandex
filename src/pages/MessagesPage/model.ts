import { TextButton } from '../../shared/ui/TextButton';
import { MessagesPageComponent } from './MessagesPageComponent';
import { ChatList } from '../../features/ChatList';
import { MessageWindow } from '../../features/MessageWindow';
import { getInputTarget, linkTo } from '../../shared/utils/helpers';
import { PROFILE_URL, RESOURCE_URL } from '../../shared/utils/constants';
import { Button } from '../../shared/ui/Button';
import { store } from '../../shared/lib/Store';
import { functionConnect } from '../../shared/lib/functionConnect';
import { PlainObject } from '../../shared/utils/types/types';
import { Input } from '../../shared/ui/Input';
import { ChatController } from '../../shared/api/controllers/ChatController';
import { AuthController } from '../../shared/api/controllers/AuthController';
import { StoreEvents } from '../../shared/lib/Store/utils';
import { Popup } from '../../shared/ui/Popup';
import { Form } from '../../entities/Form';
import { EventBus } from '../../shared/lib/EventBus';
import { Avatar } from '../../shared/ui/Avatar';
import { MessageHeader } from '../../entities/MessageHeader';
import { ChatUsersController } from '../../shared/api/controllers/ChatUsersController';
import { UserController } from '../../shared/api/controllers/UserController';

let titleChat = 'Новый чат';
let searchLogin = '';

let needHide = true;
const eventBus = new EventBus();

const withMessageHeader = functionConnect(
  (state: PlainObject) => ({
    avatar: Avatar({
      className: 'personal-image message-header__personal-image',
      withButton: false,
      img: state.currentChat?.avatar ? `${RESOURCE_URL}${state.currentChat?.avatar}` : undefined,
    }),
    name: state.currentChat?.title,
  }),
);

const MessagesPage = () => {
  ChatController.getChats();
  AuthController.getUser();

  const popup = Popup({
    form: Form({
      className: 'popup__form-container',
      headingClassName: 'popup__form-container__heading',
      inputs: [
        Input({
          events: {
            input: (evt: Event) => {
              searchLogin = getInputTarget(evt.target).value;
            },
          },
        }),
      ],
      buttons: [
        Button({
          text: 'Добавить',
          classButton: 'button popup__button',
          events: {
            click: async (evt: Event) => {
              await UserController.searchUser({ login: searchLogin });
              const { searchedUsers } = store.getState();
              const { currentChat } = store.getState();
              if (searchedUsers.length > 0 && currentChat) {
                ChatUsersController.addUsersToChat([searchedUsers[0].id], currentChat.id);
                (evt.target as HTMLButtonElement).closest('.popup')?.dispatchEvent(new Event('click'));
                ChatUsersController.getUsers(currentChat.id);
              }
            },
          },
        }),
      ],
      title: 'Добавить пользователя',
    }),
    className: 'popup popup_add',
    events: {},
  });

  const messageHeader = withMessageHeader(MessageHeader)({
    addUserButton: Button({
      text: 'Добавить пользователя',
      ariaLabel: '',
      classButton: 'add-user',
      events: {
        click: () => {
          popup.open();
        },
      },
    }),
    menuButton: Button({
      text: '',
      ariaLabel: 'menu',
      classButton: 'menu',
      events: {
        click: () => {
          needHide = !needHide;
          eventBus.emit('needHide');
        },
      },
    }),
  });
  const messageWindow = MessageWindow({ header: messageHeader });

  store.on(StoreEvents.Updated, () => {
    const { currentChat } = store.getState();
    const element = messageWindow.getContent();
    if (currentChat) {
      element.removeAttribute('style');
    } else {
      element.setAttribute('style', 'display: none');
    }
  });

  eventBus.on('needHide', () => messageHeader.setProps({ needHide }));

  const profileButton = TextButton({
    text: 'Профиль',
    className: 'text-button text-button_color_gray messages_text-button',
    events: {
      click: linkTo(PROFILE_URL),
    },
  });

  const createButton = Button({
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
  });

  const inputTitleChat = Input({
    placeholder: 'Название чата',
    events: {
      input: (evt: Event) => {
        titleChat = getInputTarget(evt.target).value;
      },
    },
  });

  const sendButton = Button({
    text: 'Создать',
    events: {
      click: () => {
        ChatController.createChat(titleChat);
      },
    },
  });

  return new MessagesPageComponent({
    profileButton,
    createButton,
    inputTitleChat,
    sendButton,
    isCreateMode: false,
    chatList: ChatList({}),
    messageWindow,
    className: 'messages',
    popup,
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
