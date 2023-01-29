import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { LoginPagePropsType, TemplateType } from './types';

const loginPageTemplate: TemplateType = ({ Form }) => ui({ Form });

class LoginPageComponent extends Block {
  constructor({ Form, attributes = { class: 'login' } }: LoginPagePropsType) {
    super('main', { Form }, { attributes });
  }

  customRender() {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPageComponent };
