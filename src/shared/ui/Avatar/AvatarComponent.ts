import { Block } from '../../lib/Block';
import { AvatarProps } from './types';
import ui from './ui.hbs';

const avatarTemplate = (props: AvatarProps) => ui(props);

class AvatarComponent extends Block {
  constructor(
    {
      img,
      events,
      withButton,
      attributes,
    }: AvatarProps,
  ) {
    super('form', { img, events, withButton }, { attributes });
  }

  customRender() {
    return this.compile(avatarTemplate, this.props);
  }
}

export { AvatarComponent };
