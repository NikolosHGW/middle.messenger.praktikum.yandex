import { MessageFooter } from '../../entities/MessageFooter';
import { MessageHeader } from '../../entities/MessageHeader';
import { MessageWindowComponent } from './MessageWindowComponent';

const MessageWindow = ({
  header = MessageHeader(),
  messages = [],
  footer = MessageFooter(),
  className = 'message-window',
} = {}) => new MessageWindowComponent({
  header,
  messages,
  footer,
  className,
});
export { MessageWindow };
