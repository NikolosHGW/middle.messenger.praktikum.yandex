import { isEqual } from '../../utils/helpers';
import { PlainObject } from '../../utils/types/types';
import { Component } from '../Block/types';
import { store } from '../Store';
import { StoreEvents } from '../Store/utils';

const connect = (
  mapStateToProps: (state: PlainObject) => PlainObject,
) => (Block: new (...args: unknown[]) => Component) => class <Props> extends Block {
  constructor(props: Props) {
    let state = { ...props } as PlainObject;
    super(props);

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
