export type FuncVoid = (...args: unknown[]) => void;
export type EmptyFunc = () => void;
export type EventsPropType = Record<string, FuncVoid>;
export type PlainObject<T = any> = {
  [k in string]: T;
};
