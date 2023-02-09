import { Block } from '../../lib/Block';
import { TemplateType, TheirMessageProps } from './types';
import ui from './ui.hbs';

const theirMessageTemplate = (props: TemplateType) => ui(props);

class TheirMessageComponent extends Block {
  constructor({ text, time, className }: TheirMessageProps) {
    super('p', { text, time }, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(theirMessageTemplate, this.props);
  }
}

export { TheirMessageComponent };
