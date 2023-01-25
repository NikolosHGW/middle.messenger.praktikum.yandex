import { Block } from '../../lib/Block';
import { BlockProps } from '../../lib/Block/types';
import { InputProps } from './types';
import ui from './ui.hbs';

const inputTemplate = (props: InputProps) => ui(props);

class InputComponent extends Block {
  constructor(props: BlockProps<Block>) {
    props.attributes = { class: 'label' };
    super('label', props);
  }

  customRender() {
    return this.compile(inputTemplate, this.props);
  }
}

export { InputComponent };
