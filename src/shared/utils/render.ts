import { Component } from '../lib/Block/types';

export const render = (query: string, block: Component) => {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();
  }
};
