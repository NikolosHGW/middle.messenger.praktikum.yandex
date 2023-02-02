/* eslint-disable no-console */
export const getInputTarget = (target: EventTarget | null) => (target as HTMLInputElement);

export const logObjectToConsole = (obj: Record<string, string>) => console.log(obj);
