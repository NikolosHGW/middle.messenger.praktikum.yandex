import { EventsPropType } from '../../utils/types/types';

export type AvatarAttributes = {
  name: string,
  class: string,
}

export type AvatarProps = {
  img: string,
  events: EventsPropType,
  attributes: AvatarAttributes
}
