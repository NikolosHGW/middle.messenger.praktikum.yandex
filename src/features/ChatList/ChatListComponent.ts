import { Block } from '../../shared/lib/Block';
import { ChatListProps, TemplateType } from './types';
import ui from './ui.hbs';

const chatListTemplate: TemplateType = (props) => ui(props);

class ChatListComponent extends Block {
  constructor({
    chats,
    search,
    className,
  }: ChatListProps) {
    super(
      'div',
      { search },
      { attributes: { class: className }, childrenWithList: { chats } },
    );
  }

  customRender() {
    return this.compile(chatListTemplate, this.props);
  }
}

export { ChatListComponent };
