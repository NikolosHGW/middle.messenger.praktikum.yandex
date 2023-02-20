import { TextButton } from '../../shared/ui/TextButton';
import { MessagesPageComponent } from './MessagesPageComponent';
import { ChatList } from '../../features/ChatList';
import { MessageWindow } from '../../features/MessageWindow';
import { linkTo } from '../../shared/utils/helpers';
import { PROFILE_URL } from '../../shared/utils/constants';
import { Button } from '../../shared/ui/Button';
import { store } from '../../shared/lib/Store';
import { functionConnect } from '../../shared/lib/functionConnect';
import { PlainObject } from '../../shared/utils/types/types';

const MessagesPage = () => new MessagesPageComponent({
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
  isCreateMode: false,
  chatList: ChatList({}),
  messageWindow: MessageWindow(),
  className: 'messages',
});

const withIsCreateMode = functionConnect(
  (state: PlainObject) => ({ isCreateMode: state.chatList?.isCreateMode }),
);

const messagesPageFunc = withIsCreateMode(MessagesPage);

export { messagesPageFunc as MessagesPage };
