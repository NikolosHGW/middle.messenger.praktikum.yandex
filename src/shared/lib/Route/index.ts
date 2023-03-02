import { render } from '../../utils/render';
import { Component } from '../Block/types';

class Route<T extends Component> {
  private pathname: string;

  private BlockClass: () => T;

  private props: Record<string, string>;

  private Block: T | null = null;

  constructor(pathname: string, view: () => T, props: Record<string, string>) {
    this.pathname = pathname;
    this.BlockClass = view;
    this.Block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.Block) {
      this.Block.unMount();
      this.Block = null;
    }
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.Block) {
      this.Block = this.BlockClass();
      render(this.props.rootQuery, this.Block);
    }
  }
}

export { Route };
