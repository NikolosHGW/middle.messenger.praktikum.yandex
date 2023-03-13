Ссылка на задеплоенный проект старой версии с parcel - https://statuesque-cuchufli-4b0574.netlify.app

Ссылка на макет в Фигме - https://www.figma.com/file/KtuCYmhRUqHjXgtVUxQY5B/Chat_external_link?node-id=0%3A1&t=DklDnxy9VWwNAGXC-0

## Описание
Мессенджер для общения с друзьями

## Установка

- `npm install` — установка стабильной версии,
- `npm run serve` — запуск через сервер вебпака на порту 8080,
- `npm run build` — сборка стабильной версии.
- `npm run start` — запуск проекта с раздачей статики express на порту 3000.
- `npm run test` — запуск тестов.

## Запуск через докер

- `docker build -t messanger .` — собрать конейнер с названием messanger (из корневой папки),
- `docker run -p 3000:3000 -d messanger` — запустить контейнер, раздав проект на порту 3000,
- `docker stop -t 0 %id контейнера%` — остановить контейнер.

## **Роуты страниц**

- `/` — Вход (login),
- `/sign-up` — Регистрация
- `/messenger` — Список и лента чата
- `/settings` — Информация о профиле
- `/edit` — Редактирования профиля
- `/password` — Изменения пароля
- `/not-found` — Страничка не найдена
- `/error` — Ошибка сервера

## Инструменты

- TypeScript,
- Webpack,
- ESLint,
- Stylelint,
- Sass,
- Express.js,
- WebSockets,
- Precommit Husky,
- Mocha,
- Chai,
