import { MessageInputComponent } from './MessageInputComponent';

const MessageInput = ({
  className = 'message',
} = {}) => new MessageInputComponent({
  className,
});

export { MessageInput };
