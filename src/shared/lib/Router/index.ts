import { protectRoute } from '../../utils/decorators';
import { Component } from '../Block/types';
import { Route } from '../Route';

class Router {
  public static instance: Router;

  private currentRoute: Route<Component> | null;

  public routes: Record<string, Route<Component>>;

  public history: History;

  public rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.instance) {
      return Router.instance;
    }

    this.routes = {};
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router.instance = this;
  }

  use(pathname: string, block: () => Component) {
    const route = new Route<Component>(pathname, block, { rootQuery: this.rootQuery });
    this.routes[pathname] = route;

    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      this.onRoute((event.currentTarget as Window).location.pathname);
    };

    this.onRoute(window.location.pathname);
  }

  @protectRoute
  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    if (route) {
      this.currentRoute = route;
      route.render();
    }
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes[pathname];
  }
}

const router = new Router('#root');

export { router };
