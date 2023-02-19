import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { UserData } from '../../../utils/types/types';
import { EditProfileAPI } from '../../EditProfileAPI';

class UserController {
  @handleError
  public static async editUser(data: UserData) {
    const newUserData = await EditProfileAPI.update(data);

    store.set('user', newUserData);
  }
}

export { UserController };
