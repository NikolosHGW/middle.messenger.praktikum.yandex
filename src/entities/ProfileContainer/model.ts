import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { ProfileContainerComponent } from './ProfileContainerComponent';

const ProfileContainer = ({
  avatar = Input(),
  title = 'Иван',
  formName = 'profile',
  inputs = [Input(), Input()],
  buttons = [Button()],
  className = 'profile-container',
  headingClassNameForForm = 'profile-container__heading',
  formClassNameForForm = 'profile-form',
  fieldsetClassNameForForm = 'profile-form__fieldset',
} = {}) => new ProfileContainerComponent({
  avatar,
  title,
  formName,
  headingClassNameForForm,
  formClassNameForForm,
  fieldsetClassNameForForm,
  inputs,
  buttons,
  attributes: { class: className },
});

export { ProfileContainer };
