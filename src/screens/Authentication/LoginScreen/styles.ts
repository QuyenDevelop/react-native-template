import { CGlobalStyles, CThemes } from "@shared";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  childContainer: {
    paddingTop: CThemes.screenUtils.scale(16),
    paddingHorizontal: CThemes.screenUtils.scale(10),
  },
  buttonSocial: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: CThemes.screenUtils.scale(38),
    height: CThemes.screenUtils.scale(38),
    borderRadius: CThemes.screenUtils.scale(38),
    borderWidth: 2 * StyleSheet.hairlineWidth,
    marginHorizontal: CThemes.screenUtils.scale(4),
  },
  line: {
    width: CThemes.screenUtils.scale(60),
    height: CThemes.screenUtils.scale(2),
    backgroundColor: CThemes.colors.black2s,
  },
  orLogin: {
    marginHorizontal: CThemes.screenUtils.scale(8),
  },
  title: {
    ...CGlobalStyles.text24,
    ...CGlobalStyles.fontMedium,
    color: CThemes.colors.black6s,
    marginBottom: CThemes.screenUtils.scale(16),
  },
  forgotPassword: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.primary6s,
  },
  noAccount: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.black5s,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: CThemes.constantStyles.spacing16,
    paddingVertical: CThemes.constantStyles.spacing8,
    borderTopColor: CThemes.colors.black2s,
    borderTopWidth: 2 * StyleSheet.hairlineWidth,
  },
  help: {
    ...CGlobalStyles.text12,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.black5s,
  },
  contact: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.primary6s,
  },
  goBackContainer: {
    width: CThemes.constantStyles.sizeLarge,
    alignItems: "center",
    justifyContent: "center",
  },
  languageButton: {
    paddingHorizontal: CThemes.constantStyles.spacing8,
    paddingVertical: CThemes.constantStyles.spacing8,
    borderRadius: CThemes.constantStyles.borderRadius16,
    backgroundColor: CThemes.colors.black3s,
    marginRight: CThemes.constantStyles.borderRadius16,
  },
  language: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    marginHorizontal: CThemes.constantStyles.spacing8,
  },
});
