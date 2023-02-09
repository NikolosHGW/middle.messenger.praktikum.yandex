import { Block } from '../../lib/Block';
import { TextButtonProps } from './types';
import ui from './ui.hbs';

const textButtoTemplate = (props: TextButtonProps) => ui(props);

class TextButtonComponent extends Block {
  constructor({ text, attributes }: TextButtonProps) {
    super('a', { text }, { attributes });
  }

  customRender() {
    return this.compile(textButtoTemplate, this.props);
  }
}

export { TextButtonComponent };
