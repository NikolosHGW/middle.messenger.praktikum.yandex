type TemplateProps = { text: string, time: Date }

export type TemplateType = (props: TemplateProps) => string;

export type YourMessageProps = TemplateProps & { className: string };
