import { FunctionComponent } from "react";
import { BaseTextInput, ITextInputProps } from "rn-core-components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CIcon } from "../CIcons";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import { CGlobalStyles, CThemes } from "@shared";
interface CTextInputProps extends ITextInputProps {
  isShowChoseCountry?: boolean;
  countryCodeValue?: CountryCode;
  onSelectCountry?: (country: Country) => void;
  isShowIconRight?: boolean;
  rightIconName?: string;
  rightIconType?: string;
  rightIconClick?: () => void;
}

export const CTextInput: FunctionComponent<CTextInputProps> = props => {
  const {
    isShowChoseCountry,
    countryCodeValue = "VN",
    onSelectCountry,
    isShowIconRight,
    rightIconName = "ic_eye",
    rightIconType,
    rightIconClick,
    ...arg
  } = props;
  return (
    <BaseTextInput
      textRightComponent={
        isShowIconRight && (
          <TouchableOpacity
            onPress={rightIconClick}
            style={{
              marginLeft: CThemes.constantStyles.spacing8,
              width: CThemes.screenUtils.scale(24),
              alignItems: "flex-end",
            }}
          >
            <CIcon
              name={rightIconName}
              type={rightIconType}
              color={CThemes.colors.black4s}
            />
          </TouchableOpacity>
        )
      }
      textLeftComponent={
        isShowChoseCountry && (
          <View>
            <CountryPicker
              countryCode={countryCodeValue}
              theme={{
                ...CGlobalStyles.text14,
                ...CGlobalStyles.fontRegular,
              }}
              withEmoji
              withFilter
              withFlag
              withFlagButton
              withCallingCodeButton
              translation="common"
              withCountryNameButton={false}
              onSelect={onSelectCountry}
              containerButtonStyle={{
                paddingRight: CThemes.constantStyles.spacing8,
                borderRightWidth: 2 * StyleSheet.hairlineWidth,
                borderRightColor: CThemes.colors.black3s,
                marginRight: CThemes.constantStyles.spacing8,
              }}
            />
          </View>
        )
      }
      {...arg}
    />
  );
};
