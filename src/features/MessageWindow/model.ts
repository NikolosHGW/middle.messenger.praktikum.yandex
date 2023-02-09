import { MessageFooter } from '../../entities/MessageFooter';
import { MessageHeader } from '../../entities/MessageHeader';
import { TheirMessage } from '../../shared/ui/TheirMessage';
import { YourMessage } from '../../shared/ui/YourMessage';
import { MessageWindowComponent } from './MessageWindowComponent';

const MessageWindow = ({
  header = MessageHeader(),
  messages = [
    TheirMessage({ className: 'their-message message-window__their-message' }),
    YourMessage({ className: 'your-message message-window__your-message' }),
  ],
  footer = MessageFooter(),
  className = 'message-window',
} = {}) => new MessageWindowComponent({
  header,
  messages,
  footer,
  className,
});

export { MessageWindow };
