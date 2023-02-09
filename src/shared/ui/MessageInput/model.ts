import { MessageInputComponent } from './MessageInputComponent';

const MessageInput = ({
  className = 'message',
  events = {},
} = {}) => new MessageInputComponent({
  className,
  events,
});

export { MessageInput };
