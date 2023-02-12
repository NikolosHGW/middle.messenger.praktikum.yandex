import { authApiInstance } from './utils';

class AuthAPI {
  create(data: Record<string, string>) {
    return authApiInstance.post('/auth/signup', {
      data,
    });
  }

  read() {
    return authApiInstance.get('/auth/user');
  }
}

export { AuthAPI };
