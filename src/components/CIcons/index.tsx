import * as React from "react";
import { Icons } from "./IconConfig";
import { TextStyle } from "react-native";
import { DATA_CONSTANT } from "@configs";

interface IconProps {
  type?: string;
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
}

export const CIcon: React.FunctionComponent<IconProps> = props => {
  const { type, size = 16, ...arg } = props;
  switch (type) {
    case DATA_CONSTANT.ICON_TYPE.AntDesign:
      return <Icons.AntDesign size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Entypo:
      return <Icons.Entypo size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.EvilIcons:
      return <Icons.EvilIcons size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Feather:
      return <Icons.Feather size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.FontAwesome:
      return <Icons.FontAwesome size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.FontAwesome5:
      return <Icons.FontAwesome5 size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Fontisto:
      return <Icons.Fontisto size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Foundation:
      return <Icons.Foundation size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Ionicons:
      return <Icons.Ionicons size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.MaterialCommunityIcons:
      return <Icons.MaterialCommunityIcons size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.MaterialIcons:
      return <Icons.MaterialIcons size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Octicons:
      return <Icons.Octicons size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.SimpleLineIcons:
      return <Icons.SimpleLineIcons size={size} {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Zocial:
      return <Icons.Zocial size={size} {...arg} />;
    default:
      return <Icons.icoMoonIcon size={size} {...arg} />;
  }
};
