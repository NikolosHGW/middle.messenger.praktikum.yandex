import { parseXMLRequest } from '../../../utils/helpers';
import { authApiInstance } from '../../instances';

class SignInAPI {
  static async create(data: { login: string, password: string }) {
    const result = await authApiInstance.post('/signin', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async read() {
    const result = await authApiInstance.get('/user') as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { SignInAPI };
