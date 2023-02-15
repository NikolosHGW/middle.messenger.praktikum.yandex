import { authApiInstance } from '../instances';

class LogoutAPI {
  static create() {
    return authApiInstance.post('/logout');
  }
}

export { LogoutAPI };
