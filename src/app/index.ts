import { AuthPage } from '../pages/AuthPage';
import { EditPasswordPage } from '../pages/EditPasswordPage';
import { EditProfilePage } from '../pages/EditProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
import { ErrorPage } from '../pages/ErrorPage';
import { ProfilePage } from '../pages/ProfilePage';
import { router } from '../shared/lib/Router';
import {
  AUTH_URL,
  EDIT_PASSWORD_URL,
  EDIT_PROFILE_URL,
  ERROR_URL,
  LOGIN_URL,
  MESSAGE_URL,
  NOT_FOUND_URL,
  PROFILE_URL,
} from '../shared/utils/constants';
import './index.scss';

router
  .use(LOGIN_URL, LoginPage)
  .use(AUTH_URL, AuthPage)
  .use(MESSAGE_URL, MessagesPage)
  .use(PROFILE_URL, ProfilePage)
  .use(EDIT_PROFILE_URL, EditProfilePage)
  .use(EDIT_PASSWORD_URL, EditPasswordPage)
  .use(NOT_FOUND_URL, () => ErrorPage({ title: '404', subtitle: 'Не туда попали' }))
  .use(ERROR_URL, () => ErrorPage({ title: '500', subtitle: 'Мы уже фиксим' }))
  .start();
