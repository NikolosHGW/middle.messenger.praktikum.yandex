import { expect } from 'chai';
import { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic, useFakeXMLHttpRequest } from 'sinon';
import { CustomFetch } from '.';

describe('CustomFetch', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: CustomFetch;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = useFakeXMLHttpRequest();

    global.XMLHttpRequest = xhr as any;
    global.FormData = xhr as any;

    xhr.onCreate = ((request) => {
      requests.push(request);
    });

    instance = new CustomFetch('/auth');
  });

  afterEach(() => {
    requests.length = 0;
  });

  it('Метод get должен отправить GET запрос', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('GET');
  });
});
