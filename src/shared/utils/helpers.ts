import { InputType } from '../lib/Validation/types';
import { Validation } from '../lib/Validation/Validation';

/* eslint-disable no-console */
export const getInputTarget = (target: EventTarget | null) => (target as HTMLInputElement);

export const logObjectToConsole = (obj: Record<string, string>) => console.log(obj);

export const validate = (type: InputType) => (evt: Event) => {
  if (evt.target) {
    Validation.handleInputEvent(evt.target, type);
  }
};

export const queryStringify = (
  data: Record<string, unknown>,
) => Object.entries(data).reduce((prev, item) => {
  const pair = `${item.at(0)}=${item.at(1)}`;
  if (prev === '') {
    return `?${pair}`;
  }
  return `${prev}&${pair}`;
}, '');
