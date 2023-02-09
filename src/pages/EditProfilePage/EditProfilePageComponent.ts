import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { EditProfilePagePropsType, TemplateType } from './types';

const EditProfilePageTemplate: TemplateType = ({ ProfileContainer }) => ui({ ProfileContainer });

class EditProfilePageComponent extends Block {
  constructor({ ProfileContainer, attributes = { class: 'profile' } }: EditProfilePagePropsType) {
    super('main', { ProfileContainer }, { attributes });
  }

  customRender() {
    return this.compile(EditProfilePageTemplate, this.props);
  }
}

export { EditProfilePageComponent };
