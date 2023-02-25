import { parseXMLRequest } from '../../../utils/helpers';
import { authApiInstance } from '../../instances';
import { SignupData } from '../../types';

class AuthAPI {
  static logout() {
    return authApiInstance.post('/logout');
  }

  static async signin(data: { login: string, password: string }) {
    const result = await authApiInstance.post('/signin', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async read() {
    const result = await authApiInstance.get('/user') as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async signup(data: SignupData) {
    const result = await authApiInstance.post('/signup', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { AuthAPI };
