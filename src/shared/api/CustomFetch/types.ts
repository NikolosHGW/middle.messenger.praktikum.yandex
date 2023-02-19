export type Options = {
  timeout?: number,
  data?: Record<string, unknown> | FormData,
  headers?: Record<string, string>,
  withCredentials?: boolean,
};

export type OptionsWithMethod = Options & { method: string; };

export type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;
