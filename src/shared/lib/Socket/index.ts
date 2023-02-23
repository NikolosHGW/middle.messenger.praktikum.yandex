import { store } from '../Store';

const SOCKET_URL = 'wss://ya-praktikum.tech/ws/chats';

const addNewSocketToStore = (userId: number, chatId: number, token: string) => {
  const socket = new WebSocket(`${SOCKET_URL}/${userId}/${chatId}/${token}`);

  const timerId = setInterval(() => socket.send(JSON.stringify({
    content: '',
    type: 'message',
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
    // const { user } = store.getState();
    // const { data } = event as { data: {  } };
    // c filteredMessages = event.data.filter(({ content }: { content: string }) => content !== '');
    // const therMessages = filteredMessages.filter(({ id }: { id: number }) => user.id !== id);
    // store.set('messages', filteredMessages);
  });

  socket.addEventListener('error', (event) => {
    console.log(event);
    console.log('Ошибка', event);
  });

  store.set('currentSocket', socket);
};

export { addNewSocketToStore };
