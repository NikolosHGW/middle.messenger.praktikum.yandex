import { AuthPage } from '../pages/AuthPage';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
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

const routes = {
  '/': loginPage,
  '/auth': authPage,
  '/messages': messagesPage,
};

const router = () => {
  const route = routes[window.location.pathname];

  route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
