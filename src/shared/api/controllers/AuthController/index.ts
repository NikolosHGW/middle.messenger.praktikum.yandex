import { store } from '../../../lib/Store';
import { linkTo } from '../../../utils/helpers';
import { handleError } from '../../../utils/decorators';
import { LOGIN_URL, MESSAGE_URL } from '../../../utils/constants';
import { LoginData, SignupData } from '../../types';
import { AuthAPI } from '../../routes/AuthAPI';

class AuthController {
  @handleError
  public static async getUser() {
    const user = await AuthAPI.read();
    store.set('user', user);
  }

  @handleError
  public static async login(data: LoginData) {
    await AuthAPI.signin(data);
    await AuthController.getUser();
    linkTo(MESSAGE_URL)();
  }

  @handleError
  public static async signup(data: SignupData) {
    await AuthAPI.signup(data);
    await AuthController.getUser();
    linkTo(MESSAGE_URL)();
  }

  @handleError
  public static async logout() {
    await AuthAPI.logout();
    store.restState();
    linkTo(LOGIN_URL)();
  }
}

export { AuthController };
