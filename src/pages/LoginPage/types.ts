import { Block } from '../../shared/lib/Block';
import { InputComponent } from '../../shared/ui/Input/InputComponent';

type TemplateType = ({ Form }: { Form: Block }) => string;
type LoginPagePropsType = { attributes?: Record<string, string>, Form: InputComponent }

export { TemplateType, LoginPagePropsType };
