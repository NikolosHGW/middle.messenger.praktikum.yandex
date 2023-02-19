import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { UserData } from '../../../utils/types/types';
import { editPasswordAPI } from '../../EditPasswordAPI';
import { EditProfileAPI } from '../../EditProfileAPI';

class UserController {
  @handleError
  public static async editUser(data: UserData) {
    const newUserData = await EditProfileAPI.update(data);

    store.set('user', newUserData);
  }

  @handleError
  public static async editPassword(data: { oldPassword: string, newPassword: string }) {
    await editPasswordAPI.update(data);
  }
}

export { UserController };
