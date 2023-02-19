import { CustomFetch } from './CustomFetch';

export const authApiInstance = new CustomFetch('/auth');

export const userApiInstance = new CustomFetch('/user');
