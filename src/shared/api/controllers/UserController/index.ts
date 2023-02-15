import { SignInAPI } from '../../SignInAPI';
import { LogoutAPI } from '../../LogoutAPI';
import { store } from '../../../lib/Store';
import { parseXMLRequest } from '../../../utils/helpers';
import { handleError } from '../../../utils/decorators';

class UserController {
  @handleError
  public static getUser() {
    SignInAPI.read()
      .then(parseXMLRequest)
      .then(({ email: displayName }) => store.set('user.displayName', displayName));
  }

  @handleError
  public static login(data: { login: string, password: string }) {
    SignInAPI.create(data);
  }

  @handleError
  public static logout() {
    LogoutAPI.create();
  }
}

export { UserController };
