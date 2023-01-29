import { FormComponent } from '../../entities/Form/FormComponent';
import { Block } from '../../shared/lib/Block';

type TemplateType = ({ Form }: { Form: Block }) => string;
type LoginPagePropsType = { attributes?: Record<string, string>, Form: FormComponent }

export { TemplateType, LoginPagePropsType };
