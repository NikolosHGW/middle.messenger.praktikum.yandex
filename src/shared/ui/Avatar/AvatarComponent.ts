import { Block } from '../../lib/Block';
import { AvatarProps } from './types';
import ui from './ui.hbs';

const avatarTemplate = (props: AvatarProps) => ui(props);

class AvatarComponent extends Block {
  constructor({ text, attributes }: AvatarProps) {
    super('button', { text }, { attributes });
  }

  customRender() {
    return this.compile(avatarTemplate, this.props);
  }
}

export { AvatarComponent };
