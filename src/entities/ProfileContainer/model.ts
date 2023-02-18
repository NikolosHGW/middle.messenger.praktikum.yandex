import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { ProfileContainerComponent } from './ProfileContainerComponent';

const ProfileContainer = ({
  avatar = Avatar(),
  title = 'Иван',
  formName = 'profile',
  inputs = [Input(), Input()],
  buttons = [Button()],
  className = 'profile-container',
  events = {},
} = {}) => new ProfileContainerComponent({
  avatar,
  title,
  formName,
  inputs,
  buttons,
  events,
  attributes: { class: className },
});

export { ProfileContainer };
