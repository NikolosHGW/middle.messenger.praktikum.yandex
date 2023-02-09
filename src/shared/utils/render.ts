import { Block } from '../lib/Block';

export const render = (query: string, block: Block) => {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();
  }
};
