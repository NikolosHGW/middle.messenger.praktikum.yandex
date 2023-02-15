import { AuthAPI } from '../../shared/api/AuthAPI';
import { store } from '../../shared/lib/Store';

class UserController {
  public static getUser() {
    AuthAPI.read()
      .then((result: XMLHttpRequest) => new Promise<unknown>((resolve) => {
        resolve(JSON.parse(result.response));
      }))
      .then(({ email: displayName }) => store.set('user.displayName', displayName));
  }
}

export { UserController };
