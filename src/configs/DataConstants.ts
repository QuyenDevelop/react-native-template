const languageCodes = [
  { code: "vi", tag: "vi-VN" },
  { code: "en", tag: "en-US" },
  { code: "ja", tag: "ja-JP" },
  { code: "cn", tag: "zh-CN" },
  { code: "tw", tag: "zh-TW" },
];

export enum IconType {
  AntDesign = "AntDesign",
  Entypo = "Entypo",
  EvilIcons = "EvilIcons",
  Fontisto = "Fontisto",
  Feather = "Feather",
  FontAwesome = "FontAwesome",
  Foundation = "Foundation",
  Ionicons = "Ionicons",
  MaterialIcons = "MaterialIcons",
  MaterialCommunityIcons = "MaterialCommunityIcons",
  Octicons = "Octicons",
  Zocial = "Zocial",
  SimpleLineIcons = "SimpleLineIcons",
  FontAwesome5 = "FontAwesome5",
}

export const DATA_CONSTANT = {
  LANGUAGE_CODE: languageCodes,
  ICON_TYPE: IconType,
};
