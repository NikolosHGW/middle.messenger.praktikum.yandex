export type FuncVoid = (...args: unknown[]) => void;
export type EmptyFunc = () => void;
export type EventsPropType = Record<string, FuncVoid>;
export type PlainObject<T = any> = {
  [k in string]: T;
};
export type UserData = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

export type ChatType = {
  avatar: null | string;
  created_by: number;
  id: number
  last_message: null | { user: UserData, time: string, content: string}
  title: string
  unread_count: number
}
