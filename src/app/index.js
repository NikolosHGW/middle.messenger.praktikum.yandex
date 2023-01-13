import { AuthPage } from '../pages/AuthPage';
import { EditProfilePage } from '../pages/EditProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
import { ProfilePage } from '../pages/ProfilePage';
import './index.scss';

const root = document.querySelector('#root');

const loginPage = () => {
  root.innerHTML = LoginPage();
};

const authPage = () => {
  root.innerHTML = AuthPage();
};

const messagesPage = () => {
  root.innerHTML = MessagesPage();
};

const profilePage = () => {
  root.innerHTML = ProfilePage();
};

const editProfilePage = () => {
  root.innerHTML = EditProfilePage();
};

const routes = {
  '/': loginPage,
  '/auth': authPage,
  '/messages': messagesPage,
  '/profile': profilePage,
  '/edit': editProfilePage,
};

const router = () => {
  const route = routes[window.location.pathname];

  route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
