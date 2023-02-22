const SOCKET_URL = 'wss://ya-praktikum.tech/ws/chats';

const createSocket = (userId: number, chatId: number, token: string) => {
  const socket = new WebSocket(`${SOCKET_URL}/${userId}/${chatId}/${token}`);

  socket.addEventListener('open', () => {
    console.log('Соединение установлено');

    // socket.send(JSON.stringify({
    //   content: 'Моё первое сообщение миру!',
    //   type: 'message',
    // }));
  });

  socket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener('message', (event) => {
    console.log('Получены данные', event.data);
  });

  socket.addEventListener('error', (event) => {
    console.log(event);
    console.log('Ошибка', event);
  });
};

export { createSocket };
