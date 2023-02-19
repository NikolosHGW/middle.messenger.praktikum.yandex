import { AvatarComponent } from './AvatarComponent';
import avatarDefault from '../../images/avatar.min.svg';

const Avatar = ({
  name = 'avatar',
  className = 'personal-image',
  img = avatarDefault,
  events = {},
} = {}) => new AvatarComponent({
  img,
  events,
  attributes: {
    class: className,
    name,
  },
});

export { Avatar };
