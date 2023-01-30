import { ProfileContainerComponent } from '../../entities/ProfileContainer/ProfileContainerComponent';

export type TemplateType = (
  { ProfileContainer }: { ProfileContainer: ProfileContainerComponent }
) => string;

export type ProfilePagePropsType = {
  attributes?: Record<string, string>,
  ProfileContainer: ProfileContainerComponent
}
