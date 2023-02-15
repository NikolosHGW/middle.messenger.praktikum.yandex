import { Router } from '../lib/Router';
import { InputType } from '../lib/Validation/types';
import { Validation } from '../lib/Validation/Validation';
import { PlainObject } from './types/types';

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

export const isPlainObject = (value: unknown):value is PlainObject => typeof value === 'object'
      && value !== null
      && value.constructor === Object
      && Object.prototype.toString.call(value) === '[object Object]';

export const isArray = (value: unknown): value is [] => Array.isArray(value);

export const isArrayOrObject = (value: unknown):
value is [] | PlainObject => isPlainObject(value) || isArray(value);

export const isEqual = (lhs: PlainObject, rhs: PlainObject) => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  return Object.entries(lhs).every(([key, value]) => {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        return true;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }

    return true;
  });
};

export const linkTo = (pathname: string) => () => {
  new Router('#root').go(pathname);
};

const merge = (lhs: PlainObject, rhs: PlainObject): PlainObject => {
  Object.keys(rhs).forEach((p) => {
    if (Object.prototype.hasOwnProperty.call(rhs, p)) {
      try {
        if (rhs[p].constructor === Object) {
          rhs[p] = merge(lhs[p] as PlainObject, rhs[p] as PlainObject);
        } else {
          lhs[p] = rhs[p];
        }
      } catch (e) {
        lhs[p] = rhs[p];
      }
    }
  });

  return lhs;
};

export const set = (
  object: PlainObject | unknown,
  path: string,
  value: unknown,
): PlainObject | unknown => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<PlainObject>((acc, key) => ({
    [key]: acc,
  }), value as any);
  return merge(object as PlainObject, result);
};
