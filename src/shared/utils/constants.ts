export const loginRegexString = '^(?![0-9]+$)[a-zA-Z0-9-_]{3,20}$';
export const passwordRegex = /^(?=\P{Ll}*\p{Ll})(?=\P{Lu}*\p{Lu})[\s\S]{8,40}$/;
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z._-]+\.[a-zA-Z]{2,}$/;
export const nameRegex = '[-a-zA-Zа-яА-ЯЁё]+';
export const phoneRegex = /^\+?\d{10,15}$/;

export const LOGIN_URL = '/';
export const AUTH_URL = '/sign-up';
export const PROFILE_URL = '/settings';
export const MESSAGE_URL = '/messenger';
export const EDIT_PROFILE_URL = '/edit';
export const EDIT_PASSWORD_URL = '/password';
export const NOT_FOUND_URL = '/not-found';
export const ERROR_URL = '/error';

export const ROOT_URL = 'https://ya-praktikum.tech/api/v2';
export const RESOURCE_URL = `${ROOT_URL}/resources`;
