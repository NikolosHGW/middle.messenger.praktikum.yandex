import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { UserData } from '../../../utils/types/types';
import { ProfileAPI } from '../../routes/ProfileAPI';
import { SearchUserAPI } from '../../routes/SearchUserAPI';

class UserController {
  @handleError
  public static async editUser(data: UserData) {
    const newUserData = await ProfileAPI.updateProfile(data);

    store.set('user', newUserData);
  }

  @handleError
  public static async editPassword(data: { oldPassword: string, newPassword: string }) {
    await ProfileAPI.updatePassword(data);
  }

  @handleError
  public static async editAvatar(data: FormData) {
    const newUserData = await ProfileAPI.updateAvatar(data) as { avatar: string };

    store.set('user.avatar', newUserData.avatar);
  }

  @handleError
  public static async searchUser(data: { login: string }) {
    const users = await SearchUserAPI.create(data);

    store.set('searchedUsers', users);
  }
}

export { UserController };
