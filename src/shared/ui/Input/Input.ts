import { InputTemplier } from '.';
import { Block } from '../../lib/Block';

class Input extends Block {
  constructor(props: {}) {
    // Создаём враппер дом-элемент button
    super('div', props);
  }

  customRender() {
    // return InputTemplier(this.props);
    // console.log(this.compile(InputTemplier, this.props));
    return this.compile(InputTemplier, this.props);
  }
}

const InputTest: Input = new Input({ inputId: 'login-input', placeholder: 'ЛогинОПА!', inputName: 'login' });

// setTimeout(() => {
//   InputTest.setProps({
//     placeholder: 'Аааа прикол!!!',
//   });
// }, 3000);

export { Input, InputTest };
