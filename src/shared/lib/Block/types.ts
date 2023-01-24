type ExtendRecord<T> = Record<string, T>;
type BlockProps<B> = ExtendRecord<string | B | ExtendRecord<string>>;

export { BlockProps };
