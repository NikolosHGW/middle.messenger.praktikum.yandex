import { Block } from '../../shared/lib/Block';
import { MessageFooterProps, TemplateType } from './types';
import ui from './ui.hbs';

const messageHeaderTemplate: TemplateType = (props) => ui(props);

class MessageHeaderComponent extends Block {
  constructor({
    avatar,
    name,
    menuButton,
    className,
  }: MessageFooterProps) {
    super(
      'header',
      { avatar, name, menuButton },
      { attributes: { class: className } },
    );
  }

  customRender() {
    return this.compile(messageHeaderTemplate, this.props);
  }
}

export { MessageHeaderComponent };
