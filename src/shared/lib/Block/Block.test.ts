import { assert } from 'chai';
import { Block } from '.';

describe('block', () => {
  class ButtonComponent extends Block {
    customRender() {
      return new DocumentFragment();
    }
  }

  it('ButtonComponent возвращает button DOM элемент', () => {
    const component = new ButtonComponent('button');
    const buttonElement = document.createElement('button');
    assert.equal(component.getContent().tagName, buttonElement.tagName);
  });
});
