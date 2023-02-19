import { functionConnect } from '../lib/functionConnect';
import { ROOT_URL } from './constants';
import { PlainObject } from './types/types';

export const withAvatar = functionConnect(
  (state: PlainObject) => ({ img: `${ROOT_URL}/resources${state.user?.avatar}` }),
);
