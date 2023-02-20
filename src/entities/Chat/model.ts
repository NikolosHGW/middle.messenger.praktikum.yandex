import { Avatar } from '../../shared/ui/Avatar';
import { ChatComponent } from './ChatComponent';

const Chat = ({
  avatar = Avatar({ className: 'personal-image chat__personal-image', withButton: false }),
  title = 'Иван',
  lastMessage = '',
  className = 'chat',
  time = '1 Мая 2023',
  counter = '3',
  events = {},
  chatId = 0,
} = {}) => new ChatComponent({
  avatar,
  title,
  lastMessage,
  time,
  counter,
  className,
  events,
  chatId,
});

export { Chat };
