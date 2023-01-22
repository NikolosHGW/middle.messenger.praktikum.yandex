import { EventBus } from '../EventBus/EventBus';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private htmlElement: HTMLElement;

  private meta: { tagName: string, props: {} };

  private props: {};

  private eventBus: () => EventBus;

  constructor(tagName = 'div', props = {}, eventBus: EventBus = EventBus.getInstance()) {
    this.meta = {
      tagName,
      props,
    };

    this.props = this.makePropsProxy(props);

    this.eventBus = () => eventBus;

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    // eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
  }

  private createResources() {
    const { tagName } = this.meta;
    this.htmlElement = this.createDocumentElement(tagName);
  }

  init() {
    this.createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // private componentDidMount(oldProps: string) {
  //   this.customComponentDidMount(oldProps);
  // }

  // // Может переопределять пользователь, необязательно трогать
  // customComponentDidMount(oldProps: string) {
  // }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  componentDidUpdate() {
    const response = this.customComponentDidUpdate();
    if (response) {
      this.render();
    }
  }

  // Может переопределять пользователь, необязательно трогать
  customComponentDidUpdate() {
    // eslint-disable-next-line no-self-compare
    return this === this;
  }

  setProps = (nextProps: {}) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this.htmlElement;
  }

  private render() {
    const block = this.customRender();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this.htmlElement.innerHTML = block;
  }

  // Может переопределять пользователь, необязательно трогать
  customRender(): string {
    return `${this.element}hello!`;
  }

  getContent() {
    return this.element;
  }

  makePropsProxy(props: {}): {} {
    const { eventBus } = this;

    return new Proxy(props, {
      set(target: Record<string, string>, prop: string, value: string) {
        target[prop] = value;
        eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  createDocumentElement(tagName: string) {
  // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}

export { Block };
