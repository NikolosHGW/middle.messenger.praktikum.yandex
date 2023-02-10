import { EmptyFunc, EventsPropType } from '../../utils/types/types';

export type ExtendRecord<T> = Record<string, T>;
export type BlockProps<B> = ExtendRecord<string | B | boolean | EventsPropType>;
export type Options<B> = {
  attributes?: Record<string, string>,
  childrenWithList?: ExtendRecord<Array<B>>
};

export interface Component {
  id: string;
  props: BlockProps<Component>;
  children: Record<string, Component>;
  attributes?: Record<string, string>;
  childrenWithList?: ExtendRecord<Array<Component>>;

  compile: (templator: (props: {}) => string, props: BlockProps<Component>) => void;
  init: EmptyFunc;
  customComponentDidMount: () => boolean;
  dispatchComponentDidMount: EmptyFunc;
  componentDidUpdate: EmptyFunc;
  setProps: (nextProps: {}) => void;
  customRender: () => Node;
  getContent: () => HTMLElement;
  createDocumentElement: (tagName: string) => HTMLElement;
  toggleInputEvents: (eventName: string, needAdd: boolean) => void;
  show: EmptyFunc;
  hide: EmptyFunc;
}
