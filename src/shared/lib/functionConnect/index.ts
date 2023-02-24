import { isEqual } from '../../utils/helpers';
import { PlainObject } from '../../utils/types/types';
import { Component } from '../Block/types';
import { store } from '../Store';
import { StoreEvents } from '../Store/utils';

const functionConnect = (mapStateToProps: (state: PlainObject) => PlainObject) => {
  const withHOC = <TComponent extends Component>(
    funcComponent: (props?: PlainObject) => TComponent,
  ) => {
    const newFuncComponent = (props?: PlainObject) => {
      let state = { ...props } as PlainObject;

      const objectComponent = funcComponent(props);

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        if (!isEqual(state, newState)) {
          objectComponent.setProps({ ...newState });
        }

        state = newState;
      });

      return objectComponent;
    };

    return newFuncComponent;
  };

  return withHOC;
};

export { functionConnect };
