import { v4 as makeUUID } from 'uuid';
import { EventsPropType } from '../../utils/types/types';
import { EventBus } from '../EventBus';
import {
  BlockProps,
  Component,
  ExtendRecord,
  Options,
} from './types';

abstract class Block implements Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private htmlElement: HTMLElement;

  private meta: { tagName: string, propsWithoutChildren: {} };

  private eventBus: () => EventBus;

  private needUpdateProps: boolean;

  readonly id: string;

  props: BlockProps<Component>;

  children: Record<string, Component>;

  attributes?: Record<string, string>;

  childrenWithList?: ExtendRecord<Array<Component>>;

  constructor(
    tagName = 'div',
    props: BlockProps<Component> = {},
    options: Options<Component> = {},
    eventBus: EventBus = new EventBus(),
  ) {
    const { children, props: propsWithoutChildren } = Block.getChildren(props);
    this.meta = {
      tagName,
      propsWithoutChildren,
    };

    this.saveOptions(options);

    this.id = makeUUID();

    this.eventBus = () => eventBus;

    this.children = this.makePropsProxy(children);

    this.props = this.makePropsProxy({ ...propsWithoutChildren, id: this.id });

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private saveOptions(options: Options<Component>) {
    const { attributes, childrenWithList } = options;
    if (attributes) {
      this.attributes = { ...attributes };
    }
    if (childrenWithList) {
      this.childrenWithList = this.makePropsProxy({ ...childrenWithList });
    }
  }

  private static getChildren(propsAndChildren: {}) {
    const children: Record<string, Component> = {};
    const props: Record<string, Component | string> = {};
    const childrenList: Record<string, Array<Component>> = {};

    Object.entries(propsAndChildren).forEach((
      [key, value]: [key: string, value: Component | string],
    ) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        childrenList[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, childrenList };
  }

  compile(templator: (props: {}) => string, props: BlockProps<Component>) {
    const propsAndStubs = { ...props };
    const childrenBlocks: Component[] = [];

    Object.entries(this.children).forEach(([key, child]: [key: string, child: Component]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
      childrenBlocks.push(child);
    });

    if (this.childrenWithList) {
      Object.entries(this.childrenWithList).forEach((
        [key, childs]: [key: string, childs: Component[]],
      ) => {
        const resultString = childs.reduce((prev, child) => {
          childrenBlocks.push(child);
          return `${prev}<div data-id="${child.id}"></div>`;
        }, '');
        propsAndStubs[key] = resultString;
      });
    }

    const fragment = (this.createDocumentElement('template') as HTMLTemplateElement);

    fragment.innerHTML = templator(propsAndStubs);

    childrenBlocks.forEach((child) => {
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
    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
  }

  customComponentDidMount() {
    return false;
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  componentDidUpdate() {
    this.render();
  }

  setProps = (nextProps: {}) => {
    if (!nextProps) {
      return;
    }

    this.needUpdateProps = false;

    const oldProps = { ...this.props };

    const { children, props, childrenList } = Block.getChildren(nextProps);

    if (Object.values(children).length) {
      Object.assign(this.children, children);
    }
    if (Object.values(props).length) {
      Object.assign(this.props, props);
    }
    if (Object.values(childrenList).length) {
      Object.assign(this.childrenWithList as ExtendRecord<Component[]>, childrenList);
    }

    if (this.needUpdateProps) {
      this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, this.props);
      this.needUpdateProps = false;
    }
  };

  get element() {
    return this.htmlElement;
  }

  private render() {
    const block = this.customRender();
    this.toggleEvents(false);
    this.htmlElement.innerHTML = '';
    this.htmlElement.appendChild(block);
    this.setAttributes();
    this.toggleEvents(true);
  }

  customRender(): Node {
    return this.htmlElement;
  }

  getContent() {
    return this.htmlElement;
  }

  private makePropsProxy(props: {}): {} {
    const self = this;

    return new Proxy(props, {
      set(target: Record<string, string>, prop: string, value: string) {
        if (target[prop] !== value) {
          target[prop] = value;
          self.needUpdateProps = true;
        }

        return true;
      },
      deleteProperty() {
        throw new Error('?????? ??????????????');
      },
    });
  }

  private setAttributes() {
    if (this.attributes) {
      Object.entries(this.attributes).forEach(([key, value]) => {
        this.htmlElement.setAttribute(key, value);
      });
    }
  }

  createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this.id);

    return element;
  }

  toggleInputEvents(eventName: string, needAdd: boolean) {
    const { events = {} } = this.props;

    const castEvents = (events as EventsPropType);
    const input = this.htmlElement.querySelector('input');

    if (input) {
      if (needAdd) {
        input.addEventListener(eventName, castEvents[eventName]);
      } else {
        input.removeEventListener(eventName, castEvents[eventName]);
      }
    }
  }

  private toggleEvents(needAdd: boolean) {
    const { events = {} } = this.props;
    const inputsEvents = ['focus', 'blur'];

    const castEvents = (events as EventsPropType);

    Object.keys(events).forEach((eventName: string) => {
      if (inputsEvents.includes(eventName)) {
        this.toggleInputEvents(eventName, needAdd);
      }
      if (needAdd) {
        this.htmlElement.addEventListener(eventName, castEvents[eventName]);
      } else {
        this.htmlElement.removeEventListener(eventName, castEvents[eventName]);
      }
    });
  }

  show() {
    this.htmlElement.style.display = 'block';
  }

  hide() {
    this.htmlElement.style.display = 'none';
  }

  unMount() {
    this.htmlElement.remove();
  }
}

export { Block };
