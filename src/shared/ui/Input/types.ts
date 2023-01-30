type InputAttributes = {
  class: string,
}

export type InputProps = {
  inputId: string,
  placeholder: string,
  inputName: string,
  inputType: string,
  inputClassName: string,
  errorSpanClassName: string,
  withEditSpan: boolean,
  spanText: string,
  attributes: InputAttributes,
};
