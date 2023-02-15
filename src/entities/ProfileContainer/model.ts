import { connect } from '../../shared/lib/connect';
import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { ProfileContainerComponent } from './ProfileContainerComponent';

const withTitle = connect((state: any) => ({ title: state.user?.displayName }));

const ProfileContainerComponentHoc = withTitle(ProfileContainerComponent);

const ProfileContainer = ({
  avatar = Avatar(),
  title = 'Иван',
  formName = 'profile',
  inputs = [Input(), Input()],
  buttons = [Button()],
  className = 'profile-container',
  events = {},
} = {}) => new ProfileContainerComponentHoc({
  avatar,
  title,
  formName,
  inputs,
  buttons,
  events,
  attributes: { class: className },
});

export { ProfileContainer };
