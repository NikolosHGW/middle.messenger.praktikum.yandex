import { Block } from '../../lib/Block';
import { SearchInputProps } from './types';
import ui from './ui.hbs';

const searchInputTemplate = () => ui();

class SearchInputComponent extends Block {
  constructor({ className }: SearchInputProps) {
    super('label', {}, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(searchInputTemplate, this.props);
  }
}

export { SearchInputComponent };
