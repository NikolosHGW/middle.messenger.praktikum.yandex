import { AuthPage } from '../pages/AuthPage';
import { EditPasswordPage } from '../pages/EditPasswordPage';
import { EditProfilePage } from '../pages/EditProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
import { ErrorPage } from '../pages/ErrorPage';
import { ProfilePage } from '../pages/ProfilePage';
import './index.scss';
import { render } from '../shared/utils/render';

const root = document.querySelector('#root');

const loginPage = () => {
  render('#root', LoginPage());
};

const authPage = () => {
  render('#root', AuthPage());
};

const messagesPage = () => {
  render('#root', MessagesPage());
};

const profilePage = () => {
  render('#root', ProfilePage());
};

const editProfilePage = () => {
  render('#root', EditProfilePage());
};

const editPasswordPage = () => {
  render('#root', EditPasswordPage());
};

const notFoundPage = () => {
  render('#root', ErrorPage({ title: '404', subtitle: 'Не туда попали' }));
};

const serverErrorPage = () => {
  render('#root', ErrorPage({ title: '500', subtitle: 'Мы уже фиксим' }));
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
