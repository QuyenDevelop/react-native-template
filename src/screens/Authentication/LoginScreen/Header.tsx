// import { AccountAction } from "@redux";
import { CIcon, ChooseLanguageModal } from "@components";
import { CONSTANT, DATA_CONSTANT } from "@configs";
import {
  useAppDispatch,
  useAppNavigation,
  useAppSelector,
  useBoolean,
} from "@hooks";
import { asyncChangeLanguage } from "@redux";
import { CGlobalStyles, CThemes, translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IRootState } from "src/redux/types";
import { styles } from "./styles";

interface HeaderLoginProps {
  language: string;
  isGoBack?: boolean;
}

export const Header: FunctionComponent<HeaderLoginProps> = ({
  isGoBack = false,
  language,
}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const languageSelected = DATA_CONSTANT.LANGUAGE.find(
    item => item.value === language,
  );
  const [isShowModalLanguage, showModalLanguage, hideModalLanguage] =
    useBoolean();

  const handleChangeLanguage = (language: string) => {
    dispatch(asyncChangeLanguage(language));
    hideModalLanguage();
  };

  const renderGoback = () => (
    <View style={CGlobalStyles.appContent}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.goBackContainer}
      >
        <CIcon
          color={CThemes.colors.black6s}
          name={"ic_arrow_left"}
          size={CThemes.constantStyles.iconSizeSmall}
        />
      </TouchableOpacity>
    </View>
  );

  const renderChangeLanguage = () => (
    <TouchableOpacity
      onPress={showModalLanguage}
      style={{
        ...CGlobalStyles.rowCenterNonFlex,
        ...styles.languageButton,
      }}
    >
      <CIcon
        color={CThemes.colors.black5s}
        name={"globe"}
        type={DATA_CONSTANT.ICON_TYPE.Feather}
        size={CThemes.constantStyles.iconSizeSmall}
      />
      <Text style={styles.language}>
        {languageSelected?.label || translate("button.language")}
      </Text>
      <CIcon
        color={CThemes.colors.black5s}
        name={"chevron-down"}
        type={DATA_CONSTANT.ICON_TYPE.Feather}
        size={CThemes.constantStyles.iconSizeSmall}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <View
        style={{
          ...CGlobalStyles.rowBetweenNonFlex,
          height: CThemes.screenUtils.scale(48),
        }}
      >
        {isGoBack ? renderGoback() : <View />}
        {renderChangeLanguage()}
      </View>
      <ChooseLanguageModal
        isVisible={isShowModalLanguage}
        onCloseModal={hideModalLanguage}
        languageSelected={languageSelected?.value || CONSTANT.LANGUAGES.EN}
        handleChangeLanguage={handleChangeLanguage}
      />
    </>
  );
};
