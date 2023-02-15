import { authApiInstance } from './utils';

class AuthAPI {
  static create(data: Record<string, string>) {
    return authApiInstance.post('/auth/signup', {
      data,
    });
  }

  static read() {
    return authApiInstance.get('/auth/user');
  }
}

export { AuthAPI };
