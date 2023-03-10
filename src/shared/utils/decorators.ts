import { store } from '../lib/Store';
import { AUTH_URL, LOGIN_URL, MESSAGE_URL } from './constants';

export const handleError = <Target = unknown>(
  _target: Target,
  _key: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;
  descriptor.value = async (...args: unknown[]) => {
    try {
      await originalMethod(...args);
    } catch (err) {
      console.log(err);
    }
  };
};

export function protectRoute<Target = unknown>(
  _target: Target,
  _key: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  descriptor.value = function newMethod(pathname: string) {
    const { user } = store.getState();
    const isAuthPathname = [LOGIN_URL, AUTH_URL].includes(pathname);
    if (user) {
      originalMethod.call(this, isAuthPathname ? MESSAGE_URL : pathname);
    } else {
      originalMethod.call(this, isAuthPathname ? pathname : LOGIN_URL);
    }
  };
}
