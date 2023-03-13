import { assert } from 'chai';
import { router } from '.';

let currentRoute = '/';
const allRoutes = ['/', '/login', 'auth'];

window.history.forward = () => {
  const lastIndex = allRoutes.length - 1;
  const currentRouteIndex = allRoutes.findIndex((item) => item === currentRoute);
  const nextRouteIndex = lastIndex === currentRouteIndex ? 0 : currentRouteIndex + 1;
  currentRoute = allRoutes[nextRouteIndex];
};

window.history.back = () => {
  const currentRouteIndex = allRoutes.findIndex((item) => item === currentRoute);
  const prevRouteIndex = currentRouteIndex === 0 ? allRoutes.length - 1 : currentRouteIndex - 1;
  currentRoute = allRoutes[prevRouteIndex];
};

describe('Router', () => {
  it('Forward', () => {
    currentRoute = '/login';
    router.forward();
    assert.equal(currentRoute, 'auth');
  });

  it('Back', () => {
    currentRoute = '/login';
    router.back();
    assert.equal(currentRoute, '/');
  });
});
