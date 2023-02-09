import { SearchInputComponent } from './SearchInputComponent';

const SearchInput = ({
  className = 'search',
} = {}) => new SearchInputComponent({
  className,
});

export { SearchInput };
