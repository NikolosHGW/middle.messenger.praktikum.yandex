export type LoginData = {
  login: string;
  password: string;
}

export type SignupData = LoginData & {
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
};
