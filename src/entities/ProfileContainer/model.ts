import { FormValidator } from '../../shared/lib/FormValidator';
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
} = {}) => {
  const profileContainer = new ProfileContainerComponent({
    avatar,
    title,
    formName,
    inputs,
    buttons,
    events,
    attributes: { class: className },
  });

  const profileFormValid = new FormValidator({
    inputSelector: '.edit-label__input',
    submitButtonSelector: '.button',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'label__input_type_error',
    errorClass: 'error-span_active',
  }, profileContainer.getContent().querySelector('.profile-form') as HTMLFormElement);

  profileFormValid.enableValidation();

  return profileContainer;
};

export { ProfileContainer };
