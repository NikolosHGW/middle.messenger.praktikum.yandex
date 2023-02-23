import { Block } from '../../lib/Block';
import { TemplateType, TheirMessageProps } from './types';
import ui from './ui.hbs';

const theirMessageTemplate = (props: TemplateType) => ui(props);

class TheirMessageComponent extends Block {
  time: Date;

  constructor({ text, time, className }: TheirMessageProps) {
    const formatedTime = time.toTimeString().split(' ')[0].substring(0, 5);

    super('p', { text, time: formatedTime }, { attributes: { class: className } });
    this.time = time;
  }

  customRender() {
    return this.compile(theirMessageTemplate, this.props);
  }
}

export { TheirMessageComponent };
