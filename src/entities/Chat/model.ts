import { Avatar } from '../../shared/ui/Avatar';
import { ChatComponent } from './ChatComponent';

const Chat = ({
  avatar = Avatar({ className: 'avatar chat__avatar' }),
  title = 'Иван',
  lastMessage = 'Друзья, у меня для вас особенный...',
  className = 'chat',
  time = '1 Мая 2023',
  counter = Avatar({ className: 'avatar chat__counterDELETE' }),
} = {}) => new ChatComponent({
  avatar,
  title,
  lastMessage,
  time,
  counter,
  className,
});

export { Chat };
