import { Block } from '../../lib/Block';
import { TemplateType, YourMessageProps } from './types';
import ui from './ui.hbs';

const yourMessageTemplate = (props: TemplateType) => ui(props);

class YourMessageComponent extends Block {
  constructor({ text, time, className }: YourMessageProps) {
    super('p', { text, time }, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(yourMessageTemplate, this.props);
  }
}

export { YourMessageComponent };
