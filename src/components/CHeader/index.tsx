import { useAppNavigation } from "@hooks";
import { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { BaseHeaderBar, HeaderBarProps } from "rn-core-components";
import { CIcon } from "../CIcons";
import { CGlobalStyles, CThemes } from "@shared";

export interface HeaderIcon {
  name: string;
  type?: string;
  handle?: () => void;
}

interface CHeaderProps extends HeaderBarProps {
  iconRights?: HeaderIcon[];
}

export const CHeader: FunctionComponent<CHeaderProps> = props => {
  const { iconRights, ...arg } = props;
  const navigation = useAppNavigation();

  const renderIcons = () => {
    return !!iconRights?.length ? (
      <View style={CGlobalStyles.rowBetween}>
        {iconRights.map((icon, index) => (
          <TouchableOpacity
            onPress={icon.handle}
            key={index}
            style={{
              marginHorizontal: CThemes.screenUtils.scale(4),
            }}
          >
            <CIcon type={icon.type} name={icon.name} size={24} />
          </TouchableOpacity>
        ))}
      </View>
    ) : null;
  };

  return (
    <BaseHeaderBar
      onPressGoBack={props.onPressGoBack || navigation.goBack}
      renderIconRight={props.renderIconRight || renderIcons()}
      {...arg}
    />
  );
};
