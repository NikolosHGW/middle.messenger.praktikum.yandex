import { functionConnect } from '../../shared/lib/functionConnect';
import { PlainObject } from '../../shared/utils/types/types';

export const withEmailInput = functionConnect(
  (state: PlainObject) => ({ value: state.user?.email }),
);

export const withLoginInput = functionConnect(
  (state: PlainObject) => ({ value: state.user?.login }),
);

export const withFirstNameInput = functionConnect(
  (state: PlainObject) => ({ value: state.user?.first_name }),
);

export const withSecondNameInput = functionConnect(
  (state: PlainObject) => ({ value: state.user?.second_name }),
);

export const withDisplayNameInput = functionConnect(
  (state: PlainObject) => ({ value: state.user?.display_name }),
);

export const withPhoneInput = functionConnect(
  (state: PlainObject) => ({ value: state.user?.phone }),
);
