import { Block } from '../../lib/Block';
import { TextButtonProps } from './types';
import ui from './ui.hbs';

const textButtoTemplate = (props: TextButtonProps) => ui(props);

class TextButtonComponent extends Block {
  constructor({ text, events, attributes }: TextButtonProps) {
    super('button', { text, events }, { attributes });
  }

  customRender() {
    return this.compile(textButtoTemplate, this.props);
  }
}

export { TextButtonComponent };
