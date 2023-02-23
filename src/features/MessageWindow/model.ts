import { MessageFooter } from '../../entities/MessageFooter';
import { MessageHeader } from '../../entities/MessageHeader';
import { store } from '../../shared/lib/Store';
import { StoreEvents } from '../../shared/lib/Store/utils';
import { MessageWindowComponent } from './MessageWindowComponent';

const MessageWindow = ({
  header = MessageHeader(),
  messages = [],
  footer = MessageFooter(),
  className = 'message-window',
} = {}) => {
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
