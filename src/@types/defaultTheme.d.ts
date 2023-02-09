import { THEME } from "~/theme";
type CustomThemeType = typeof THEME;

declare module "native-base" {
  interface ICustomThemeType extends CustomThemeType {}
}
