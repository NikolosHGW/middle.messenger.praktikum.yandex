import { SearchInputComponent } from './SearchInputComponent';

const SearchInput = ({
  className = 'search',
  events = {},
} = {}) => new SearchInputComponent({
  className,
  events,
});

export { SearchInput };
