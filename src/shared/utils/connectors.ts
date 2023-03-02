import { functionConnect } from '../lib/functionConnect';
import { RESOURCE_URL } from './constants';
import { PlainObject } from './types/types';
import avatarDefault from '../images/avatar.min.svg';

export const withAvatar = functionConnect(
  (state: PlainObject) => ({ img: state.user?.avatar ? `${RESOURCE_URL}${state.user.avatar}` : avatarDefault }),
);
