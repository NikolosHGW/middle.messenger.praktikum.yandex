export type Options = {
  timeout?: number;
  data?: Record<string, unknown>;
  headers?: Record<string, string>;
};

export type OptionsWithMethod = Options & { method: string; };

export type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;
