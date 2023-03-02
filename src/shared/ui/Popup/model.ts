import { PopupComponent } from './PopupComponent';
import { PopupType } from './types';

const Popup: PopupType = ({
  form,
  className = 'popup',
  events = {},
}) => new PopupComponent({
  form,
  events,
  className,
});

export { Popup };
