import { YourMessageComponent } from './YourMessageComponent';

const YourMessage = ({
  text = 'Круто!',
  className = 'your-message',
  time = new Date(),
} = {}) => new YourMessageComponent({
  text, className, time,
});

export { YourMessage };
