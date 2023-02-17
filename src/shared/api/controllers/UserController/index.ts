import { SignInAPI } from '../../SignInAPI';
import { LogoutAPI } from '../../LogoutAPI';
import { store } from '../../../lib/Store';
import { linkTo, parseXMLRequest } from '../../../utils/helpers';
import { handleError } from '../../../utils/decorators';
import { LOGIN_URL, MESSAGE_URL } from '../../../utils/constants';

class UserController {
  @handleError
  public static async getUser() {
    SignInAPI.read()
      .then(parseXMLRequest)
      .then(({ email: displayName }) => store.set('user.displayName', displayName));
  }

  @handleError
  public static async login(data: { login: string, password: string }) {
    await SignInAPI.create(data);
    localStorage.setItem('isLoggedIn', 'true');
    linkTo(MESSAGE_URL)();
  }

  @handleError
  public static async logout() {
    LogoutAPI.create();
    localStorage.clear();
    linkTo(LOGIN_URL)();
  }
}

export { UserController };
