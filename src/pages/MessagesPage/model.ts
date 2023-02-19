import { TextButton } from '../../shared/ui/TextButton';
import { MessagesPageComponent } from './MessagesPageComponent';
import { ChatList } from '../../features/ChatList';
import { MessageWindow } from '../../features/MessageWindow';
import { linkTo } from '../../shared/utils/helpers';
import { PROFILE_URL } from '../../shared/utils/constants';
import { Button } from '../../shared/ui/Button';

const MessagesPage = () => new MessagesPageComponent({
  profileButton: TextButton({
    text: 'Профиль',
    className: 'text-button text-button_color_gray messages_text-button',
    events: {
      click: linkTo(PROFILE_URL),
    },
  }),
  createButton: Button({ classButton: 'create', text: '+' }),
  chatList: ChatList({}),
  messageWindow: MessageWindow(),
  className: 'messages',
});

export { MessagesPage };
