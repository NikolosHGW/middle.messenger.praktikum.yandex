import { TextButton } from '../../shared/ui/TextButton';
import { ErrorPageComponent } from './ErrorPageComponent';

const ErrorPage = (
  { title, subtitle }: { title: string, subtitle: string },
) => new ErrorPageComponent({
  title, subtitle, button: TextButton({ text: 'Назад к чатам', href: 'messages' }),
});

export { ErrorPage };
