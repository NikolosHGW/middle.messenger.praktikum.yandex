import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { MessageHeaderComponent } from './MessageHeaderComponent';

const MessageHeader = ({
  avatar = Avatar({ className: 'personal-image message-header__personal-image', withButton: false }),
  name = '',
  menuButton = Button({ text: '', ariaLabel: 'menu', classButton: 'menu' }),
  className = 'message-header',
  addUserButton = Button({
    text: 'Добавить пользователя',
    ariaLabel: '',
    classButton: 'add-user',
    events: {
      click: () => {},
    },
  }),
  deleteUserButton = Button({ text: 'Удалить пользователя', ariaLabel: '', classButton: 'delete-user' }),
  needHide = true,
} = {}) => new MessageHeaderComponent({
  avatar,
  name,
  menuButton,
  className,
  addUserButton,
  deleteUserButton,
  needHide,
});

export { MessageHeader };
