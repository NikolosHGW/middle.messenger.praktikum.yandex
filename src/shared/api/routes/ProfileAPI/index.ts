import { parseXMLRequest } from '../../../utils/helpers';
import { UserData } from '../../../utils/types/types';
import { userApiInstance } from '../../instances';

class ProfileAPI {
  static async updateAvatar(data: FormData) {
    const result = await userApiInstance.put('/profile/avatar', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async updatePassword(data: { oldPassword: string, newPassword: string }) {
    const result = await userApiInstance.put('/password', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async updateProfile(data: UserData) {
    const result = await userApiInstance.put('/profile', {
      data,
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { ProfileAPI };
