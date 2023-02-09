import { TextButtonComponent } from '../../shared/ui/TextButton/TextButtonComponent';

export type ErrorPageProps = {
  title: string,
  subtitle: string,
  button: TextButtonComponent,
}

export type TemplateType = ({ title, subtitle, button }: ErrorPageProps) => string;
