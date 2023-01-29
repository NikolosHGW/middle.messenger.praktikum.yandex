import { Block } from '../../shared/lib/Block';
import { FormProps } from './types';
import ui from './ui.hbs';

const formTemplate = (props: FormProps) => ui(props);

class FormComponent extends Block {
  constructor({
    title,
    formName,
    inputs,
    buttons,
    attributes,
  }: FormProps) {
    super('div', { title, formName }, { attributes, childrenWithList: { inputs, buttons } });
  }

  customRender() {
    return this.compile(formTemplate, this.props);
  }
}

export { FormComponent };
