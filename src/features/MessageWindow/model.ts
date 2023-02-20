import { MessageFooter } from '../../entities/MessageFooter';
import { MessageHeader } from '../../entities/MessageHeader';
import { EventBus } from '../../shared/lib/EventBus';
import { functionConnect } from '../../shared/lib/functionConnect';
import { Button } from '../../shared/ui/Button';
import { PlainObject } from '../../shared/utils/types/types';
import { MessageWindowComponent } from './MessageWindowComponent';

let needHide = true;
const eventBus = new EventBus();

const withCurrentChat = functionConnect(
  (state: PlainObject) => ({
    name: state.currentChat?.last_message?.user?.login,
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
  }),
);

const MessageWindow = ({
  header = withCurrentChat(MessageHeader)(),
  messages = [],
  footer = MessageFooter(),
  className = 'message-window',
} = {}) => {
  eventBus.on('needHide', () => header.setProps({ needHide }));

  return new MessageWindowComponent({
    header,
    messages,
    footer,
    className,
  });
};

export { MessageWindow };
