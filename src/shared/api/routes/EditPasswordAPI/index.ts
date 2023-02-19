import { parseXMLRequest } from '../../../utils/helpers';
import { userApiInstance } from '../../instances';

class EditPasswordAPI {
  static async update(data: { oldPassword: string, newPassword: string }) {
    const result = await userApiInstance.put('/password', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { EditPasswordAPI };
