import { StyleSheet } from "react-native";
import { CThemes } from "@shared";

export const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgAppErrorBoundary: {
    width: CThemes.screenUtils.scale(200),
    height: CThemes.screenUtils.scale(200),
  },
  noResultTitle: {
    marginTop: CThemes.screenUtils.scale(8),
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    minHeight: CThemes.screenUtils.scale(30),
    minWidth: CThemes.screenUtils.scale(42),
    paddingHorizontal: CThemes.screenUtils.scale(27),
    borderRadius: CThemes.screenUtils.scale(4),
    marginTop: CThemes.screenUtils.scale(32),
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: CThemes.colors.white6,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
