import { functionConnect } from '../lib/functionConnect';
import { PlainObject } from './types/types';

export const withEmailInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.email }),
);
