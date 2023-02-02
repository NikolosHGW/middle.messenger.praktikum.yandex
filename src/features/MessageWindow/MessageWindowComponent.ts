import { Block } from '../../shared/lib/Block';
import { MessageWindowProps, TemplateType } from './types';
import ui from './ui.hbs';

const chatListTemplate: TemplateType = (props) => ui(props);

class MessageWindowComponent extends Block {
  constructor({
    messages,
    className,
  }: MessageWindowProps) {
    super(
      'div',
      {},
      { attributes: { class: className }, childrenWithList: { messages } },
    );
  }

  customRender() {
    return this.compile(chatListTemplate, this.props);
  }
}

export { MessageWindowComponent };
