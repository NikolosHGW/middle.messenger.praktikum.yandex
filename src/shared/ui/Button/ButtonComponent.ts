import { Block } from '../../lib/Block';
import { ButtonProps } from './types';
import ui from './ui.hbs';

const buttoTemplate = (props: ButtonProps) => ui(props);

class ButtonComponent extends Block {
  constructor({ text, attributes }: ButtonProps) {
    super('button', { text }, { attributes });
  }

  customRender() {
    return this.compile(buttoTemplate, this.props);
  }
}

export { ButtonComponent };
