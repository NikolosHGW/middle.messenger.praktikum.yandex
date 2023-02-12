import { EventsPropType } from '../../utils/types/types';

export type TextButtonProps = {
  text: string,
  events: EventsPropType,
  attributes: { class: string, 'aria-label': string, type: string },
};
