import { Block } from '../../shared/lib/Block';
import { ProfileContainerProps } from './types';
import ui from './ui.hbs';

const profileContainerTemplate = (props: ProfileContainerProps) => ui(props);

class ProfileContainerComponent extends Block {
  constructor({
    title,
    formName,
    headingClassNameForForm,
    formClassNameForForm,
    fieldsetClassNameForForm,
    inputs,
    buttons,
    form,
    attributes,
  }: ProfileContainerProps) {
    super(
      'div',
      {
        title,
        formName,
        headingClassNameForForm,
        formClassNameForForm,
        fieldsetClassNameForForm,
        form,
      },
      { attributes, childrenWithList: { inputs, buttons } },
    );
  }

  customRender() {
    return this.compile(profileContainerTemplate, this.props);
  }
}

export { ProfileContainerComponent };
