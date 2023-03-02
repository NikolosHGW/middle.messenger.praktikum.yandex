import { TextButton } from '../../shared/ui/TextButton';
import { MESSAGE_URL } from '../../shared/utils/constants';
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
      click: linkTo(MESSAGE_URL),
    },
  }),
});

export { ErrorPage };
