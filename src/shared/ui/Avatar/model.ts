import { AvatarComponent } from './AvatarComponent';
import avatarDefault from '../../images/avatar.min.svg';

const Avatar = ({
  name = 'avatar',
  className = 'personal-image',
  img = avatarDefault,
  events = {},
  withButton = true,
} = {}) => new AvatarComponent({
  img,
  events,
  withButton,
  attributes: {
    class: className,
    name,
  },
});

export { Avatar };
