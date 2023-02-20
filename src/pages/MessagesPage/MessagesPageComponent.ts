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
    isCreateMode,
    inputTitleChat,
    sendButton,
  }: MessagesPageProps) {
    super('main', {
      profileButton,
      chatList,
      messageWindow,
      createButton,
      isCreateMode,
      inputTitleChat,
      sendButton,
    }, { attributes: { class: className } });
  }

  customRender() {
    return this.compile(messagesPageTemplate, this.props);
  }
}

export { MessagesPageComponent };
