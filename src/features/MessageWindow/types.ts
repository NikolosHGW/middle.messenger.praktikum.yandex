import { MessageFooterComponent } from '../../entities/MessageFooter/MessageFooterComponent';
import { MessageHeaderComponent } from '../../entities/MessageHeader/MessageHeaderComponent';
import { TheirMessageComponent } from '../../shared/ui/TheirMessage/TheirMessageComponent';
import { YourMessageComponent } from '../../shared/ui/YourMessage/YourMessageComponent';

type TemplateProps = {
  header: MessageHeaderComponent;
  messages: Array<YourMessageComponent | TheirMessageComponent>;
  footer: MessageFooterComponent;
}

export type TemplateType = (props: TemplateProps) => string;

export type MessageWindowProps = TemplateProps & {
  className: string;
};
