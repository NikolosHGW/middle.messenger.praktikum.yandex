import { Block } from '../../lib/Block';
import { TemplateType, YourMessageProps } from './types';
import ui from './ui.hbs';

const yourMessageTemplate = (props: TemplateType) => ui(props);

class YourMessageComponent extends Block {
  time: Date;

  constructor({ text, time, className }: YourMessageProps) {
    const formatedTime = time.toTimeString().split(' ')[0].substring(0, 5);

    super('p', { text, time: formatedTime }, { attributes: { class: className } });
    this.time = time;
  }

  customRender() {
    return this.compile(yourMessageTemplate, this.props);
  }
}

export { YourMessageComponent };
