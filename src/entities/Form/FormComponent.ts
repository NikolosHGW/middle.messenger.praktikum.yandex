import { Block } from '../../shared/lib/Block';
import { FormProps } from './types';
import ui from './ui.hbs';

const formTemplate = (props: FormProps) => ui(props);

class FormComponent extends Block {
  constructor({
    title,
    formName,
    headingClassName,
    formClassName,
    fieldsetClassName,
    inputs,
    buttons,
    events,
    attributes,
  }: FormProps) {
    super(
      'div',
      {
        title,
        formName,
        headingClassName,
        formClassName,
        fieldsetClassName,
        events,
      },
      { attributes, childrenWithList: { inputs, buttons } },
    );
  }

  customRender() {
    return this.compile(formTemplate, this.props);
  }
}

export { FormComponent };
