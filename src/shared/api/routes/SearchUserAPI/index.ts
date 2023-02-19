import { parseXMLRequest } from '../../../utils/helpers';
import { userApiInstance } from '../../instances';

class SearchUserAPI {
  static async create(data: { login: string }) {
    const result = await userApiInstance.post('/search', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { SearchUserAPI };
