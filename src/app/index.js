import indexFunction from './index.hbs';
import './index.scss';

const root = document.querySelector('#root');

const loginPage = () => {
  root.innerHTML = indexFunction();
};

const testPage = () => {
  root.innerHTML = '<div>Hello Test Page!</div>';
};

const routes = {
  '/': loginPage,
  '/test': testPage,
};

const router = () => {
  const route = routes[window.location.pathname];

  route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
