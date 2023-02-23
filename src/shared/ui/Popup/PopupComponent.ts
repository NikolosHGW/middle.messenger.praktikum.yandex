import { Block } from '../../lib/Block';
import { PopupProps, TemplateProps } from './types';
import ui from './ui.hbs';

const popupTemplate = (props: TemplateProps) => ui(props);

class PopupComponent extends Block {
  constructor({ form, events, className }: PopupProps) {
    super('div', { form, events }, { attributes: { class: className } });
  }

  private handleEscClose(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  closeEvent() {
    if (this.getContent().classList.contains('popup')) {
      this.close();
    }
  }

  open() {
    this.getContent().classList.add('popup_opened');
    document.addEventListener('keydown', this.handleEscClose);
    this.getContent().addEventListener('click', this.closeEvent);
  }

  close() {
    this.getContent().classList.remove('popup_opened');
    document.removeEventListener('keydown', this.handleEscClose);
    this.getContent().removeEventListener('click', this.closeEvent);
  }

  customRender() {
    return this.compile(popupTemplate, this.props);
  }
}

export { PopupComponent };
