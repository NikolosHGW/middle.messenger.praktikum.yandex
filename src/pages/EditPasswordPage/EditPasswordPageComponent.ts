import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { EditPasswordPagePropsType, TemplateType } from './types';

const editPasswordPageTemplate: TemplateType = ({ ProfileContainer }) => ui({ ProfileContainer });

class EditPasswordPageComponent extends Block {
  constructor({ ProfileContainer, attributes = { class: 'profile' } }: EditPasswordPagePropsType) {
    super('main', { ProfileContainer }, { attributes });
  }

  customRender() {
    return this.compile(editPasswordPageTemplate, this.props);
  }
}

export { EditPasswordPageComponent };
