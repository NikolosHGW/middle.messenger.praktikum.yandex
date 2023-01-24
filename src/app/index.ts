import { AuthPage } from '../pages/AuthPage';
import { EditPasswordPage } from '../pages/EditPasswordPage';
import { EditProfilePage } from '../pages/EditProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
import { ErrorPage } from '../pages/ErrorPage';
import { ProfilePage } from '../pages/ProfilePage';
import './index.scss';
import { render } from '../shared/utils/render';
import { Input } from '../shared/ui/Input';

const root = document.querySelector('#root');

const loginPage = () => {
  render('#root', Input({ inputId: 'login-input', placeholder: 'ЛогинОПА!', inputName: 'login' }));
};

const authPage = () => {
  root!.innerHTML = AuthPage();
};

const messagesPage = () => {
  root!.innerHTML = MessagesPage();
};

const profilePage = () => {
  root!.innerHTML = ProfilePage();
};

const editProfilePage = () => {
  root!.innerHTML = EditProfilePage();
};

const editPasswordPage = () => {
  root!.innerHTML = EditPasswordPage();
};

const notFoundPage = () => {
  root!.innerHTML = ErrorPage({ title: '404', subtitle: 'Не туда попали' });
};

const serverErrorPage = () => {
  root!.innerHTML = ErrorPage({ title: '500', subtitle: 'Мы уже фиксим' });
};

const routes = {
  '/': loginPage,
  '/auth': authPage,
  '/messages': messagesPage,
  '/profile': profilePage,
  '/edit': editProfilePage,
  '/password': editPasswordPage,
  '/not-found': notFoundPage,
  '/error': serverErrorPage,
};

const router = () => {
  const route = routes[window.location.pathname];

  route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
