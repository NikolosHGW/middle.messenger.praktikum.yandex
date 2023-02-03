import { Button } from '../../shared/ui/Button';
import { MessageInput } from '../../shared/ui/MessageInput';
import { getInputTarget, logObjectToConsole } from '../../shared/utils/helpers';
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
        logObjectToConsole(resultInput);
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
