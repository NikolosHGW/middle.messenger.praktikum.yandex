type TemplateProps = { text: string, time: string }

export type TemplateType = (props: TemplateProps) => string;

export type YourMessageProps = TemplateProps & { className: string };
