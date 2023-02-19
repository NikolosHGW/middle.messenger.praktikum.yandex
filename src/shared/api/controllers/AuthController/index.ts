import { SignInAPI } from '../../routes/SignInAPI';
import { LogoutAPI } from '../../routes/LogoutAPI';
import { store } from '../../../lib/Store';
import { linkTo, parseXMLRequest } from '../../../utils/helpers';
import { handleError } from '../../../utils/decorators';
import { LOGIN_URL, MESSAGE_URL } from '../../../utils/constants';
import { LoginData, SignupData } from '../../types';
import { SignupAPI } from '../../routes/SignupAPI';

class AuthController {
  @handleError
  public static async getUser() {
    SignInAPI.read()
      .then(parseXMLRequest)
      .then((data) => store.set('user', data));
  }

  @handleError
  public static async login(data: LoginData) {
    await SignInAPI.create(data);
    localStorage.setItem('isLoggedIn', 'true');
    linkTo(MESSAGE_URL)();
  }

  @handleError
  public static async signup(data: SignupData) {
    await SignupAPI.create(data);
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

export { AuthController };
