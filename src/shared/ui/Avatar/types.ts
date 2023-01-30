export type AvatarAttributes = {
  type: string,
  name: string,
  class: string,
  'aria-label': string,
}

export type AvatarProps = {
  text: string,
  attributes: AvatarAttributes
}
