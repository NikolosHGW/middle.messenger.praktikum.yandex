import { set } from '../../utils/helpers';
import { PlainObject } from '../../utils/types/types';
import { EventBus } from '../EventBus';

class Store extends EventBus {
  static EVENTS = {
    UPDATED: 'updated',
  };

  private state: PlainObject = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(Store.EVENTS.UPDATED);
  }
}

const store = new Store();

export { store };
