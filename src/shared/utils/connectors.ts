import { functionConnect } from '../lib/functionConnect';
import { PlainObject } from './types/types';

export const withEmailInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.email }),
);

export const withLoginInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.login }),
);

export const withFirstNameInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.first_name }),
);

export const withSecondNameInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.second_name }),
);

export const withDisplayNameInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.display_name }),
);

export const withPhoneInput = functionConnect(
  (state: PlainObject) => ({ placeholder: state.user?.phone }),
);
