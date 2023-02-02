import { TheirMessageComponent } from '../../shared/ui/TheirMessage/TheirMessageComponent';
import { YourMessageComponent } from '../../shared/ui/YourMessage/YourMessageComponent';

type TemplateProps = { messages: Array<YourMessageComponent | TheirMessageComponent> }

export type TemplateType = (props: TemplateProps) => string;

export type MessageWindowProps = TemplateProps & {
  className: string;
};
