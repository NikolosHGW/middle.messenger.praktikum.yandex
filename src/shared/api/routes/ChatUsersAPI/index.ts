import { parseXMLRequest } from '../../../utils/helpers';
import { chatApiInstance } from '../../instances';

class ChatUsersAPI {
  static async read(chatId: number) {
    const result = await chatApiInstance.get(`/${chatId}/users`) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { ChatUsersAPI };
