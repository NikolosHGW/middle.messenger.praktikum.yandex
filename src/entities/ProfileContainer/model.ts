import { Avatar } from '../../shared/ui/Avatar';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { Form } from '../Form';
import { ProfileContainerComponent } from './ProfileContainerComponent';

const ProfileContainer = ({
  avatar = Avatar(),
  title = 'Иван',
  formName = 'profile',
  inputs = [Input(), Input()],
  buttons = [Button()],
  className = 'profile-container',
  headingClassNameForForm = 'profile-container__heading',
  formClassNameForForm = 'profile-form',
  fieldsetClassNameForForm = 'profile-form__fieldset',
} = {}) => {
  const profileForm = () => Form({
    title,
    formName,
    inputs,
    buttons,
    headingClassName: headingClassNameForForm,
    formClassName: formClassNameForForm,
    fieldsetClassName: fieldsetClassNameForForm,
    avatar,
  });

  return new ProfileContainerComponent({
    title,
    formName,
    headingClassNameForForm,
    formClassNameForForm,
    fieldsetClassNameForForm,
    inputs,
    buttons,
    form: profileForm(),
    attributes: { class: className },
  });
};

export { ProfileContainer };
