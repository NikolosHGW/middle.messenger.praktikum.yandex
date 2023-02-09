import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { LoginPagePropsType, TemplateType } from './types';

const loginPageTemplate: TemplateType = ({ Form, links }) => ui({ Form, links });

class LoginPageComponent extends Block {
  constructor({ Form, links, attributes = { class: 'login' } }: LoginPagePropsType) {
    super('main', { Form }, { attributes, childrenWithList: { links } });
  }

  customRender() {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPageComponent };
