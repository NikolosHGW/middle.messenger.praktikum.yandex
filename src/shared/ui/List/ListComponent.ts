import { Block } from '../../lib/Block';
import { ListProps } from './types';
import ui from './ui.hbs';

const listTemplate = (props: ListProps) => ui(props);

class ListComponent extends Block {
  constructor({ link, className }: ListProps) {
    super('li', { link }, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(listTemplate, this.props);
  }
}

export { ListComponent };
