import { Block } from '../../shared/lib/Block';
import { ProfileContainerProps } from './types';
import ui from './ui.hbs';

const profileContainerTemplate = (props: ProfileContainerProps) => ui(props);

class ProfileContainerComponent extends Block {
  constructor({
    avatar,
    title,
    formName,
    inputs,
    buttons,
    attributes,
    events,
  }: ProfileContainerProps) {
    super(
      'div',
      {
        avatar,
        title,
        formName,
        events,
      },
      { attributes, childrenWithList: { inputs, buttons } },
    );
  }

  customRender() {
    return this.compile(profileContainerTemplate, this.props);
  }
}

export { ProfileContainerComponent };
