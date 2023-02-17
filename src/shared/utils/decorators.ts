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
      // console.log(err, 'Привет Дривэ');
    }
  };
};

export function protectRoute(
  _target: any,
  _key: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  descriptor.value = function newMethod(pathname: string) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isAuthPathname = [LOGIN_URL, AUTH_URL].includes(pathname);
    if (isLoggedIn) {
      originalMethod.call(this, isAuthPathname ? MESSAGE_URL : pathname);
    } else {
      originalMethod.call(this, isAuthPathname ? pathname : LOGIN_URL);
    }
  };
}
