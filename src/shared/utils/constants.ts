export const loginRegexString = '^(?![0-9]+$)[a-zA-Z0-9-_]{3,20}$';
export const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const nameRegex = /^[A-ZА-Я][A-ZА-Я-]*$/;
export const phoneRegex = /^\+?\d{10,15}$/;
