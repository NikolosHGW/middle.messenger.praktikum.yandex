import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { MessageHeaderComponent } from './MessageHeaderComponent';

const MessageHeader = ({
  avatar = Avatar({ className: 'personal-image message-header__personal-image', withButton: false }),
  name = 'Вадим',
  menuButton = Button({ text: '', ariaLabel: 'menu', classButton: 'menu' }),
  className = 'message-header',
} = {}) => new MessageHeaderComponent({
  avatar,
  name,
  menuButton,
  className,
});

export { MessageHeader };
