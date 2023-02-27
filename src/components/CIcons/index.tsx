import React, { FunctionComponent } from "react";
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

export const CIcon: FunctionComponent<IconProps> = (props) => {
  const { type, ...arg } = props;
  switch (type) {
    case DATA_CONSTANT.ICON_TYPE.AntDesign:
      return <Icons.AntDesign {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Entypo:
      return <Icons.Entypo {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.EvilIcons:
      return <Icons.EvilIcons {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Feather:
      return <Icons.Feather {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.FontAwesome:
      return <Icons.FontAwesome {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.FontAwesome5:
      return <Icons.FontAwesome5 {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Fontisto:
      return <Icons.Fontisto {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Foundation:
      return <Icons.Foundation {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Ionicons:
      return <Icons.Ionicons {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.MaterialCommunityIcons:
      return <Icons.MaterialCommunityIcons {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.MaterialIcons:
      return <Icons.MaterialIcons {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Octicons:
      return <Icons.Octicons {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.SimpleLineIcons:
      return <Icons.SimpleLineIcons {...arg} />;
    case DATA_CONSTANT.ICON_TYPE.Zocial:
      return <Icons.Zocial {...arg} />;
    default:
      return <Icons.icoMoonIcon {...arg} />;
  }
};
