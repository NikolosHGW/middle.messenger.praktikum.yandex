import { parseXMLRequest } from '../../utils/helpers';
import { UserData } from '../../utils/types/types';
import { userApiInstance } from '../instances';

class EditProfileAPI {
  static async update(data: UserData) {
    const result = await userApiInstance.put('/profile', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { EditProfileAPI };
