import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { ChatUsersAPI } from '../../routes/ChatUsersAPI';

class ChatUsersController {
  @handleError
  public static async getUsers(chatId: number) {
    const users = await ChatUsersAPI.read(chatId);
    store.set('currentChatUsers', users);

    return users;
  }

  @handleError
  public static async addUsersToChat(userIds: number[], chatId: number) {
    await ChatUsersAPI.update(userIds, chatId);
  }
}

export { ChatUsersController };
