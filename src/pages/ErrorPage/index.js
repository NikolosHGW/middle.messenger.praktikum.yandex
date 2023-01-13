import ui from './ui.hbs';
import { TextButton } from '../../shared/ui/TextButton';
import './style.scss';

const ErrorPage = ({ title, subtitle }) => ui({ button: TextButton({ text: 'Назад к чатам' }), title, subtitle });

export { ErrorPage };
