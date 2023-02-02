import { TheirMessage } from '../../shared/ui/TheirMessage';
import { YourMessage } from '../../shared/ui/YourMessage';
import { MessageWindowComponent } from './MessageWindowComponent';

const MessageWindow = ({
  messages = [
    TheirMessage({ className: 'their-message message-window__their-message' }),
    YourMessage({ className: 'your-message message-window__your-message' }),
  ],
  className = 'message-window',
} = {}) => new MessageWindowComponent({
  messages,
  className,
});

export { MessageWindow };
