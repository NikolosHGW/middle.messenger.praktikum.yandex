import { parseXMLRequest } from '../../../utils/helpers';
import { chatApiInstance } from '../../instances';

class ChatUsersAPI {
  static async read(chatId: number) {
    const result = await chatApiInstance.get(`/${chatId}/users`) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async update(users: number[], chatId: number) {
    const result = await chatApiInstance.put('/users', { data: { users, chatId } }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async delete(users: number[], chatId: number) {
    const result = await chatApiInstance.delete('/users', { data: { users, chatId } }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { ChatUsersAPI };
