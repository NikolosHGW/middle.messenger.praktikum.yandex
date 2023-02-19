import { Block } from '../../shared/lib/Block';
import { MessagesPageProps, TemplateType } from './types';
import ui from './ui.hbs';

const messagesPageTemplate: TemplateType = (props) => ui(props);

class MessagesPageComponent extends Block {
  constructor({
    profileButton,
    createButton,
    chatList,
    messageWindow,
    className,
  }: MessagesPageProps) {
    super('main', {
      profileButton, chatList, messageWindow, createButton,
    }, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(messagesPageTemplate, this.props);
  }
}

export { MessagesPageComponent };
