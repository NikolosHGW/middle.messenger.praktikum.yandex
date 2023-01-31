import { Block } from '../../shared/lib/Block';
import { ChatProps, TemplateProps } from './types';
import ui from './ui.hbs';

const chatTemplate = (props: TemplateProps) => ui(props);

class ChatComponent extends Block {
  constructor({
    title,
    lastMessage,
    avatar,
    className,
    time,
    counter,
  }: ChatProps) {
    super(
      'li',
      {
        title, lastMessage, avatar, time, counter,
      },
      { attributes: { class: className } },
    );
  }

  customRender() {
    return this.compile(chatTemplate, this.props);
  }
}

export { ChatComponent };
