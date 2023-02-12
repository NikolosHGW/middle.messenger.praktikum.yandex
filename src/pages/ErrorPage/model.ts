import { TextButton } from '../../shared/ui/TextButton';
import { linkTo } from '../../shared/utils/helpers';
import { ErrorPageComponent } from './ErrorPageComponent';

const ErrorPage = (
  { title, subtitle }: { title: string, subtitle: string },
) => new ErrorPageComponent({
  title,
  subtitle,
  button: TextButton({
    text: 'Назад к чатам',
    events: {
      click: linkTo('/messages'),
    },
  }),
});

export { ErrorPage };
