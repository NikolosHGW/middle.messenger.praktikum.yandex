import { Block } from '../../lib/Block';
import { MessageInputProps } from './types';
import ui from './ui.hbs';

const messageInputTemplate = () => ui();

class MessageInputComponent extends Block {
  constructor({ className, events }: MessageInputProps) {
    super('label', { events }, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(messageInputTemplate, this.props);
  }
}

export { MessageInputComponent };
