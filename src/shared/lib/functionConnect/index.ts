import { isEqual } from '../../utils/helpers';
import { PlainObject } from '../../utils/types/types';
import { Component } from '../Block/types';
import { store } from '../Store';
import { StoreEvents } from '../Store/utils';

function functionConnect(mapStateToProps: (state: PlainObject) => PlainObject) {
  function withHOC<TComponent extends Component>(
    funcComponent: (props?: PlainObject) => TComponent,
  ) {
    function newFuncComponent(props?: PlainObject) {
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
    }

    return newFuncComponent;
  }

  return withHOC;
}

export { functionConnect };
