import { store } from '../../shared/lib/Store';
import { Button } from '../../shared/ui/Button';
import { MessageInput } from '../../shared/ui/MessageInput';
import { getInputTarget } from '../../shared/utils/helpers';
import { MessageFooterComponent } from './MessageFooterComponent';

const resultInput = {
  message: '',
};

const MessageFooter = ({
  attachButton = Button({ text: '', ariaLabel: 'attach', classButton: 'attach' }),
  messageInput = MessageInput({
    events: {
      change: (evt: Event) => {
        resultInput.message = getInputTarget(evt.target).value;
      },
    },
  }),
  sendButton = Button({
    text: '',
    ariaLabel: 'send',
    classButton: 'send',
    events: {
      click: () => {
        if (resultInput.message.length > 0) {
          const { currentSocket } = store.getState();
          currentSocket.send(JSON.stringify({
            content: resultInput.message,
            type: 'message',
          }));
        }
      },
    },
  }),
  className = 'message-footer',
} = {}) => new MessageFooterComponent({
  attachButton,
  messageInput,
  sendButton,
  className,
});

export { MessageFooter };
