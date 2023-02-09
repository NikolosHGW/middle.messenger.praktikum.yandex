import { Block } from '../../shared/lib/Block';
import { MessageFooterProps, TemplateType } from './types';
import ui from './ui.hbs';

const messageFooterTemplate: TemplateType = (props) => ui(props);

class MessageFooterComponent extends Block {
  constructor({
    attachButton,
    messageInput,
    sendButton,
    className,
  }: MessageFooterProps) {
    super(
      'footer',
      { attachButton, messageInput, sendButton },
      { attributes: { class: className } },
    );
  }

  customRender() {
    return this.compile(messageFooterTemplate, this.props);
  }
}

export { MessageFooterComponent };
