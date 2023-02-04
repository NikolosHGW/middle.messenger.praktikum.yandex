import { Button } from '../../shared/ui/Button';
import { MessageInput } from '../../shared/ui/MessageInput';
import { getInputTarget, logObjectToConsole } from '../../shared/utils/helpers';
import { MessageFooterComponent } from './MessageFooterComponent';

const validateMessage = (evt: Event) => {
  const button = (evt.target as HTMLInputElement).closest('footer')?.querySelector('.send');
  if (getInputTarget(evt.target).value === '') {
    button?.setAttribute('disabled', 'true');
    button?.classList.add('send_disabled');
  } else {
    button?.attributes.removeNamedItem('disabled');
    button?.classList.remove('send_disabled');
  }
};

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
      focus: validateMessage,
      blur: validateMessage,
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
