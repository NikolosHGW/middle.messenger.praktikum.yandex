import { EventsPropType } from '../../utils/types/types';

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
  autocomplete: string,
  events: EventsPropType,
  attributes: InputAttributes,
  pattern: string,
  disabled: boolean,
};
