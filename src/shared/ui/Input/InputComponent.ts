import { Block } from '../../lib/Block';
import { BlockProps } from '../../lib/Block/types';
import { InputTemplate } from './model';

class InputComponent extends Block {
  constructor(props: BlockProps<Block>) {
    props.attributes = { class: 'label' };
    super('label', props);
  }

  customRender() {
    return this.compile(InputTemplate, this.props);
  }
}

export { InputComponent };
