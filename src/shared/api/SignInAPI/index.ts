import { authApiInstance } from '../instances';

class SignInAPI {
  static create(data: { login: string, password: string }) {
    return authApiInstance.post('/signin', {
      data,
    });
  }

  static read() {
    return authApiInstance.get('/user');
  }
}

export { SignInAPI };
