import { StyleSheet } from "react-native";
import { CThemes } from "@shared";

export const styles = StyleSheet.create({
  itemLanguageContainer: {
    paddingVertical: CThemes.constantStyles.borderRadius8,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderBottomColor: CThemes.colors.black3s,
  },
});
