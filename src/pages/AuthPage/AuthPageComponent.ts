import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { AuthPagePropsType, TemplateType } from './types';

const authPageTemplate: TemplateType = ({ Form }) => ui({ Form });

class AuthPageComponent extends Block {
  constructor({ Form, attributes = { class: 'auth' } }: AuthPagePropsType) {
    super('main', { Form }, { attributes });
  }

  customRender() {
    return this.compile(authPageTemplate, this.props);
  }
}

export { AuthPageComponent };
