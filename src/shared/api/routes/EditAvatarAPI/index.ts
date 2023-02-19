import { parseXMLRequest } from '../../../utils/helpers';
import { userApiInstance } from '../../instances';

class EditAvatarAPI {
  static async update(data: FormData) {
    const result = await userApiInstance.put('/profile/avatar', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { EditAvatarAPI };
