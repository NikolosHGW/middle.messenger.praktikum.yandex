import { FormComponent } from '../../../entities/Form/FormComponent';
import { EventsPropType } from '../../utils/types/types';
import { PopupComponent } from './PopupComponent';

export type PopupProps = {
  form: FormComponent;
  events: EventsPropType;
  className: string;
}

export type TemplateProps = Omit<PopupProps, 'className'>;

export type PopupType = (props: PopupProps) => PopupComponent;
