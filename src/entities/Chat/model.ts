import { Avatar } from '../../shared/ui/Avatar';
import { ChatComponentBuilder } from './ChatComponentBuilder';

const Chat = ({
  avatar = Avatar({ className: 'personal-image chat__personal-image', withButton: false }),
  title = 'Иван',
  lastMessage = '',
  className = 'chat',
  time = '1 Мая 2023',
  counter = '3',
  events = {},
  chatId = 0,
} = {}) => new ChatComponentBuilder()
  .setAvatar(avatar)
  .setTitle(title)
  .setLastMessage(lastMessage)
  .setClassName(className)
  .setTime(time)
  .setCounter(counter)
  .setEvents(events)
  .setChatId(chatId)
  .build();

export { Chat };
