import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Input } from '../shared/Input/Input';
import './index.scss';

const root = document.querySelector('#root');

const loginPage = () => {
  console.log('qq!', LoginPage());
  root.innerHTML = LoginPage();
};

const testPage = () => {
  root.innerHTML = '<div>Hello Test Page!</div>';
};

const routes = {
  '/': loginPage,
  '/test': testPage,
  '/input': () => root.innerHTML = Input(),
};

const router = () => {
  const route = routes[window.location.pathname];

  route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
