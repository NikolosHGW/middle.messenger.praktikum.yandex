import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { ChatAPI } from '../../routes/ChatAPI';

class ChatController {
  @handleError
  public static async createChat(title: string) {
    await ChatAPI.create(title);
    const chats = await ChatAPI.read();
    store.set('chats', chats);
  }

  @handleError
  public static async getChats() {
    const chats = await ChatAPI.read();
    store.set('chats', chats);
  }
}

export { ChatController };
