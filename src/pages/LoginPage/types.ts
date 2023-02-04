import { FormComponent } from '../../entities/Form/FormComponent';
import { Block } from '../../shared/lib/Block';
import { TextButtonComponent } from '../../shared/ui/TextButton/TextButtonComponent';

type TemplateType = ({ Form, links }: { Form: Block, links: TextButtonComponent[] }) => string;
type LoginPagePropsType = {
  attributes?: Record<string, string>,
  Form: FormComponent,
  links: TextButtonComponent[],
}

export { TemplateType, LoginPagePropsType };
