import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { UserData } from '../../../utils/types/types';
import { EditAvatarAPI } from '../../routes/EditAvatarAPI';
import { EditPasswordAPI } from '../../routes/EditPasswordAPI';
import { EditProfileAPI } from '../../routes/EditProfileAPI';
import { SearchUserAPI } from '../../routes/SearchUserAPI';

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
    const newUserData = await EditAvatarAPI.update(data) as { avatar: string };

    store.set('user.avatar', newUserData.avatar);
  }

  @handleError
  public static async searchUser(data: { login: string }) {
    const chats = await SearchUserAPI.create(data);

    store.set('chats', chats);
  }
}

export { UserController };
