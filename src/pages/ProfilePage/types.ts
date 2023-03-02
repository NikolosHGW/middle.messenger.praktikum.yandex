import { Component } from '../../shared/lib/Block/types';

export type TemplateType = (
  { ProfileContainer }: { ProfileContainer: Component }
) => string;

export type ProfilePagePropsType = {
  attributes?: Record<string, string>,
  ProfileContainer: Component
}
