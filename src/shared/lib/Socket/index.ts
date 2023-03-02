import { store } from '../Store';

const SOCKET_URL = 'wss://ya-praktikum.tech/ws/chats';

const addNewSocketToStore = (userId: number, chatId: number, token: string) => {
  const socket = new WebSocket(`${SOCKET_URL}/${userId}/${chatId}/${token}`);

  const timerId = setInterval(() => socket.send(JSON.stringify({
    content: '',
    type: 'ping',
  })), 6000);

  socket.addEventListener('open', () => {
    console.log('Соединение установлено');

    // socket.send(JSON.stringify({
    //   content: 'Моё первое сообщение миру!',
    //   type: 'message',
    // }));
    socket.send(JSON.stringify({
      content: '0',
      type: 'get old',
    }));
  });

  socket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }
    clearInterval(timerId);

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener('message', (event) => {
    console.log('Получены данные', event.data);
    const { user } = store.getState();
    const { data } = event;
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      const filteredMessages = parsedData.filter(({ content }: { content: string }) => content !== '');
      const { theirMessages, ownMessages } = filteredMessages.reduce((prev, message) => {
        const prop = message.user_id === user.id ? 'ownMessages' : 'theirMessages';
        prev[prop].push(message);

        return prev;
      }, { ownMessages: [], theirMessages: [] });
      store.set('theirMessages', theirMessages);
      store.set('ownMessages', ownMessages);
    } else if (parsedData.type === 'message') {
      const isOwn = parsedData.user_id === user.id;
      if (isOwn) {
        const { ownMessages } = store.getState();
        store.set('ownMessages', [...ownMessages, parsedData]);
      } else {
        const { theirMessages } = store.getState();
        store.set('theirMessages', [...theirMessages, parsedData]);
      }
    }
  });

  socket.addEventListener('error', (event) => {
    console.log(event);
    console.log('Ошибка', event);
  });

  store.set('currentSocket', socket);
};

export { addNewSocketToStore };
