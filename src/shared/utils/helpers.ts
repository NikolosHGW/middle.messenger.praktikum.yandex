export const getInputTarget = (target: EventTarget | null) => (target as HTMLInputElement);

export const logInputValueToConsole = (evt: Event) => console.log(getInputTarget(evt.target).value);
