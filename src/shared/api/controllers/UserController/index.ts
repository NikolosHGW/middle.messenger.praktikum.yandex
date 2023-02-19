import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { UserData } from '../../../utils/types/types';
import { EditAvatarAPI } from '../../EditAvatarAPI';
import { EditPasswordAPI } from '../../EditPasswordAPI';
import { EditProfileAPI } from '../../EditProfileAPI';

class UserController {
  @handleError
  public static async editUser(data: UserData) {
    const newUserData = await EditProfileAPI.update(data);

    store.set('user', newUserData);
  }

  @handleError
  public static async editPassword(data: { oldPassword: string, newPassword: string }) {
    await EditPasswordAPI.update(data);
  }

  @handleError
  public static async editAvatar(data: FormData) {
    await EditAvatarAPI.update(data);
  }
}

export { UserController };
