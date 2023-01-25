import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { LoginPagePropsType, TemplateType } from './types';

const loginPageTemplate: TemplateType = ({ Form }) => ui({ Form });

class LoginPageComponent extends Block {
  constructor(props: LoginPagePropsType) {
    props.attributes = { class: 'login' };
    super('main', props);
  }

  customRender() {
    return this.compile(loginPageTemplate, this.props);
  }
}

export { LoginPageComponent };
