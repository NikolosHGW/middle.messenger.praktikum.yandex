import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { ProfilePagePropsType, TemplateType } from './types';

const profilePageTemplate: TemplateType = ({ ProfileContainer }) => ui({ ProfileContainer });

class ProfilePageComponent extends Block {
  constructor({ ProfileContainer, attributes = { class: 'profile' } }: ProfilePagePropsType) {
    super('main', { ProfileContainer }, { attributes });
  }

  customRender() {
    return this.compile(profilePageTemplate, this.props);
  }
}

export { ProfilePageComponent };
