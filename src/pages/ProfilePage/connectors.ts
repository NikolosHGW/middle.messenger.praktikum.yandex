import { functionConnect } from '../../shared/lib/functionConnect';
import { PlainObject } from '../../shared/utils/types/types';

export const withTitle = functionConnect(
  (state: PlainObject) => ({ title: state.user?.display_name }),
);
