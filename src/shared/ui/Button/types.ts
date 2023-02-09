import { EventsPropType } from '../../utils/types/types';

type ButtonAttributes = {
  class: string,
  type: string,
  'aria-label': string
}

export type ButtonProps = {
  text: string,
  attributes: ButtonAttributes,
  events: EventsPropType,
}
