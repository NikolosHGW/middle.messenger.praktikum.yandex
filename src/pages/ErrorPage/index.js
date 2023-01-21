import ui from './ui.hbs';
import { TextButton } from '../../shared/ui/TextButton';
import './style.scss';

const ErrorPage = ({ title, subtitle }) => ui({ button: TextButton({ text: 'Назад к чатам', href: 'messages' }), title, subtitle });

export { ErrorPage };
