import { parseXMLRequest } from '../../utils/helpers';
import { authApiInstance } from '../instances';
import { SignupData } from '../types';

class SignupAPI {
  static async create(data: SignupData) {
    const result = await authApiInstance.post('/signup', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { SignupAPI };
