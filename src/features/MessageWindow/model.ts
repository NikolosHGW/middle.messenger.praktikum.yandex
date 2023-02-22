import { MessageFooter } from '../../entities/MessageFooter';
import { MessageHeader } from '../../entities/MessageHeader';
import { EventBus } from '../../shared/lib/EventBus';
import { functionConnect } from '../../shared/lib/functionConnect';
import { store } from '../../shared/lib/Store';
import { StoreEvents } from '../../shared/lib/Store/utils';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { RESOURCE_URL } from '../../shared/utils/constants';
import { PlainObject } from '../../shared/utils/types/types';
import { MessageWindowComponent } from './MessageWindowComponent';

let needHide = true;
const eventBus = new EventBus();

const withCurrentChat = functionConnect(
  (state: PlainObject) => ({
    avatar: Avatar({
      className: 'personal-image message-header__personal-image',
      withButton: false,
      img: state.currentChat?.avatar ? `${RESOURCE_URL}${state.currentChat?.avatar}` : undefined,
    }),
    name: state.currentChat?.title,
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
  store.on(StoreEvents.Updated, () => {
    const { currentSocket } = store.getState();
    if (currentSocket) {
      currentSocket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    }
  });

  return new MessageWindowComponent({
    header,
    messages,
    footer,
    className,
  });
};

export { MessageWindow };
