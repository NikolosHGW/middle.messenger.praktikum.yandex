import { parseXMLRequest } from '../../../utils/helpers';
import { chatApiInstance } from '../../instances';

class ChatAPI {
  static async create(title: string) {
    const result = await chatApiInstance.post('', {
      data: { title },
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async read() {
    const result = await chatApiInstance.get('', {
      data: { limit: 20 },
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }

  static async delete(chatId: number) {
    const result = await chatApiInstance.delete('', {
      data: { chatId },
    }) as XMLHttpRequest;

    return parseXMLRequest(result);
  }
}

export { ChatAPI };
