import { Block } from '../../lib/Block';
import { InputProps } from './types';
import ui from './ui.hbs';

const inputTemplate = (props: InputProps) => ui(props);

class InputComponent extends Block {
  constructor(props: InputProps) {
    super('label', props);
  }

  customRender() {
    return this.compile(inputTemplate, this.props);
  }
}

export { InputComponent };
