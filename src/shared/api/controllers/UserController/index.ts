import { SignInAPI } from '../../SignInAPI';
import { LogoutAPI } from '../../LogoutAPI';
import { store } from '../../../lib/Store';

class UserController {
  public static getUser() {
    try {
      SignInAPI.read()
        .then((result: XMLHttpRequest) => new Promise<unknown>((resolve) => {
          resolve(JSON.parse(result.response));
        }))
        .then(({ email: displayName }) => store.set('user.displayName', displayName));
    } catch (err) {
      // console.log(err);
    }
  }

  public static login(data: { login: string, password: string }) {
    try {
      SignInAPI.create(data);
    } catch (err) {
      // console.log(err);
    }
  }

  public static logout() {
    try {
      LogoutAPI.create();
    } catch (err) {
      // console.log(err);
    }
  }
}

export { UserController };
