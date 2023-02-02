import { YourMessageComponent } from './YourMessageComponent';

const YourMessage = ({
  text = 'Круто!',
  className = 'your-message',
  time = '11:56',
} = {}) => new YourMessageComponent({
  text, className, time,
});

export { YourMessage };
