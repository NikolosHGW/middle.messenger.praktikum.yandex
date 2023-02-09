import { AvatarComponent } from './AvatarComponent';

const Avatar = ({
  text = '',
  type = 'submit',
  name = 'avatar',
  className = 'avatar avatar_big-size',
  ariaLabel = 'аватар',
} = {}) => new AvatarComponent({
  text,
  attributes: {
    class: className,
    'aria-label': ariaLabel,
    type,
    name,
  },
});

export { Avatar };
