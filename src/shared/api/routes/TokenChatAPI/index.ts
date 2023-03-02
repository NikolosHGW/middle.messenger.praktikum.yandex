import { parseXMLRequest } from '../../../utils/helpers';
import { chatApiInstance } from '../../instances';

class TokenChatAPI {
  static async create(chatId: number) {
    const result = await chatApiInstance.post(`/token/${chatId}`) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { TokenChatAPI };
