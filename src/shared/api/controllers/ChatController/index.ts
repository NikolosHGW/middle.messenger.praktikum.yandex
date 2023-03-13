import { store } from '../../../lib/Store';
import { handleError } from '../../../utils/decorators';
import { ChatAPI } from '../../routes/ChatAPI';
import { TokenChatAPI } from '../../routes/TokenChatAPI';

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

  @handleError
  public static async getToken(chatId: number) {
    const data = await TokenChatAPI.create(chatId) as { token: string };
    store.set('token', data.token);
  }

  @handleError
  public static async deleteChat(chatId: number) {
    await ChatAPI.delete(chatId);
    store.set('currentChat', null);
    ChatController.getChats();
  }
}

export { ChatController };
