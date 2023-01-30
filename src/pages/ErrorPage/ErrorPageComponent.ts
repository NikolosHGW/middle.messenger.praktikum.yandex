import { Block } from '../../shared/lib/Block';
import ui from './ui.hbs';
import { ErrorPageProps, TemplateType } from './types';

const errorPageTemplate: TemplateType = (props) => ui(props);

class ErrorPageComponent extends Block {
  constructor({ title, subtitle, button }: ErrorPageProps) {
    super('main', { title, subtitle, button }, { attributes: { class: 'error' } });
  }

  customRender() {
    return this.compile(errorPageTemplate, this.props);
  }
}

export { ErrorPageComponent };
