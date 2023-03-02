import { StyleSheet } from "react-native";
import { Themes } from "rn-janbox-design-system-v2";
import { CThemes } from "./CThemes";

export const CGlobalStyles = StyleSheet.create({
  ...Themes.ShadowStyles,
  ...Themes.TextStyles,
  fontMedium: {
    fontFamily: CThemes.fonts.primary,
    fontWeight: "600",
  },
  fontRegular: {
    fontFamily: CThemes.fonts.primary,
    fontWeight: "400",
  },
  appContent: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowInline: {
    flex: 1,
    flexDirection: "row",
  },
  rowInlineCenter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowSpaceBetween: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
