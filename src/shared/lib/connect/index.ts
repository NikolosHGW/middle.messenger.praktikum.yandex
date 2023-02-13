import { isEqual } from '../../utils/helpers';
import { PlainObject } from '../../utils/types/types';
import { Block } from '../Block';
import { store } from '../Store';
import { StoreEvents } from '../Store/utils';
import { ParametersType } from './types';

const connect = (
  mapStateToProps: (state: PlainObject) => PlainObject,
) => (Component: typeof Block) => class <Props, Options> extends Component {
  constructor(properties: ParametersType<Props, Options>) {
    let state = mapStateToProps(store.getState());
    const { tagName = '', props = {}, options = {} } = properties;
    super(tagName, { ...props, ...state }, options);

    store.on(StoreEvents.Updated, () => {
      const newState = mapStateToProps(store.getState());

      if (!isEqual(state, newState)) {
        this.setProps({ ...newState });
      }

      state = newState;
    });
  }
};

export { connect };
