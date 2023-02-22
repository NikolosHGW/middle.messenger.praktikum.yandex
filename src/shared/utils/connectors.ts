import { functionConnect } from '../lib/functionConnect';
import { RESOURCE_URL } from './constants';
import { PlainObject } from './types/types';

export const withAvatar = functionConnect(
  (state: PlainObject) => ({ img: `${RESOURCE_URL}${state.user?.avatar}` }),
);
