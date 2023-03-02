import { AvatarComponent } from '../../shared/ui/Avatar/AvatarComponent';
import { EventsPropType } from '../../shared/utils/types/types';
import { ChatComponent } from './ChatComponent';

export class ChatComponentBuilder {
  title: string;

  lastMessage: string;

  avatar: AvatarComponent;

  className: string;

  time: string;

  counter: string;

  events: EventsPropType;

  chatId: number;

  setTitle(title: string) {
    this.title = title;

    return this;
  }

  setLastMessage(lastMessage: string) {
    this.lastMessage = lastMessage;

    return this;
  }

  setAvatar(avatar: AvatarComponent) {
    this.avatar = avatar;

    return this;
  }

  setClassName(className: string) {
    this.className = className;

    return this;
  }

  setTime(time: string) {
    this.time = time;

    return this;
  }

  setCounter(counter: string) {
    this.counter = counter;

    return this;
  }

  setEvents(events: EventsPropType) {
    this.events = events;

    return this;
  }

  setChatId(chatId: number) {
    this.chatId = chatId;

    return this;
  }

  build() {
    return new ChatComponent(this);
  }
}
