import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../EventBus';
import { BlockProps } from './types';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private htmlElement: HTMLElement;

  private meta: { tagName: string, propsWithoutChildren: {} };

  private eventBus: () => EventBus;

  private id: string;

  props: BlockProps<Block>;

  children: Record<string, Block>;

  constructor(tagName = 'div', props: BlockProps<Block> = {}, eventBus: EventBus = new EventBus()) {
    const { children, props: propsWithoutChildren } = Block.getChildren(props);
    this.meta = {
      tagName,
      propsWithoutChildren,
    };

    this.id = makeUUID();

    this.children = children;

    this.eventBus = () => eventBus;

    this.props = this.makePropsProxy({ ...propsWithoutChildren, id: this.id });

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private static getChildren(propsAndChildren: {}) {
    const children: Record<string, Block> = {};
    const props: Record<string, string> = {};

    Object.entries(propsAndChildren).forEach((
      [key, value]: [key: string, value: Block | string],
    ) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(templator: (props: {}) => string, props: BlockProps<Block>) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]: [key: string, child: Block]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    const fragment = (this.createDocumentElement('template') as HTMLTemplateElement);

    fragment.innerHTML = templator(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

      stub!.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
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

  private componentDidMount() {
    if (this.customComponentDidMount()) {
      Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
    }
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line class-methods-use-this
  customComponentDidMount() {
    return false;
  }

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
    this.htmlElement.innerHTML = '';
    this.htmlElement.appendChild(block);
    this.setAttributes();
  }

  // Может переопределять пользователь, необязательно трогать
  customRender(): Node {
    return this.htmlElement;
  }

  getContent() {
    return this.htmlElement;
  }

  private makePropsProxy(props: {}): {} {
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

  private setAttributes() {
    const { attributes } = this.props;

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        this.htmlElement.setAttribute(key, value);
      });
    }
  }

  createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this.id);

    return element;
  }

  show() {
    this.htmlElement.style.display = 'block';
  }

  hide() {
    this.htmlElement.style.display = 'none';
  }
}

export { Block };
