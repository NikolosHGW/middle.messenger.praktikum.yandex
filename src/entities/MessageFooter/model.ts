import { Button } from '../../shared/ui/Button';
import { MessageInput } from '../../shared/ui/MessageInput';
import { MessageFooterComponent } from './MessageFooterComponent';

const MessageFooter = ({
  attachButton = Button({ text: '', ariaLabel: 'attach', classButton: 'attach' }),
  messageInput = MessageInput(),
  sendButton = Button({ text: '', ariaLabel: 'send', classButton: 'send' }),
  className = 'message-footer',
} = {}) => new MessageFooterComponent({
  attachButton,
  messageInput,
  sendButton,
  className,
});

export { MessageFooter };
