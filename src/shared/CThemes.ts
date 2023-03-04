import { DefaultTheme } from "@react-navigation/native";
import { Themes } from "rn-core-components";

export const CThemes = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...Themes.Color },
  fonts: {
    primary: "SFProText-Regular",
  },
  screenUtils: Themes.ScreenUtils,
  constantStyles: Themes.ConstantStyles,
};
