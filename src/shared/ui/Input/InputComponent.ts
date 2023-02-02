import { Block } from '../../lib/Block';
import { InputProps } from './types';
import ui from './ui.hbs';

const inputTemplate = (props: InputProps) => ui(props);

class InputComponent extends Block {
  constructor({
    attributes,
    inputId,
    placeholder,
    inputName,
    inputClassName,
    errorSpanClassName,
    withEditSpan,
    spanText,
    events,
  }: InputProps) {
    super(
      'label',
      {
        inputId,
        placeholder,
        inputName,
        inputClassName,
        errorSpanClassName,
        withEditSpan,
        spanText,
        events,
      },
      { attributes },
    );
  }

  customRender() {
    return this.compile(inputTemplate, this.props);
  }
}

export { InputComponent };
