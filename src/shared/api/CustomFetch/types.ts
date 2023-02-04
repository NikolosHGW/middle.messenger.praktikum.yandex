export type options = {
  timeout?: number;
  data?: record<string, unknown>;
  headers?: record<string, string>;
}

export type optionswithmethod = options & { method: string; }
