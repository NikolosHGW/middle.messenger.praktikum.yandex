import { TextButton } from '../TextButton';
import { ListComponent } from './ListComponent';

const List = ({
  link = TextButton(),
  className = 'list',
} = {}) => new ListComponent({
  link, className,
});

export { List };
