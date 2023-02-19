import { AvatarComponent } from './AvatarComponent';
import avatarDefault from '../../images/avatar.min.svg';

const Avatar = ({
  name = 'avatar',
  className = 'personal-image',
  img = avatarDefault,
} = {}) => new AvatarComponent({
  img,
  attributes: {
    class: className,
    name,
  },
});

export { Avatar };
