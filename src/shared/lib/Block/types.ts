import { EventsPropType } from '../../utils/types/types';

type ExtendRecord<T> = Record<string, T>;
type BlockProps<B> = ExtendRecord<string | B | boolean | EventsPropType>;
type Options<B> = { attributes?: Record<string, string>, childrenWithList?: ExtendRecord<Array<B>> }

export { ExtendRecord, BlockProps, Options };
