import { Avatar } from '../../shared/ui/Avatar';
import { ChatComponent } from './ChatComponent';

const Chat = ({
  avatar = Avatar({ className: 'personal-image chat__personal-image', withButton: false }),
  title = 'Иван',
  lastMessage = 'Друзья, у меня для вас особенный...',
  className = 'chat',
  time = '1 Мая 2023',
  counter = '3',
} = {}) => new ChatComponent({
  avatar,
  title,
  lastMessage,
  time,
  counter,
  className,
});

export { Chat };
