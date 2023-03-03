import { View, Text, TouchableOpacity } from "react-native";
import { CBottomSheet } from "../CBottomSheet";
import { FunctionComponent } from "react";
import { CONSTANT, DATA_CONSTANT } from "@configs";
import { CGlobalStyles, CThemes } from "@shared";
import { styles } from "./styles";

interface LanguageModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  languageSelected: string;
  handleChangeLanguage: (language: string) => void;
}

export const ChooseLanguageModal: FunctionComponent<LanguageModalProps> = ({
  isVisible,
  onCloseModal,
  languageSelected,
  handleChangeLanguage,
}) => {
  return (
    <CBottomSheet
      isVisible={isVisible}
      headerTitle={"Ngôn ngữ"}
      onCloseModal={onCloseModal}
    >
      <View
        style={{
          ...CGlobalStyles.childrenContainer,
          paddingBottom: CThemes.constantStyles.spacing8,
        }}
      >
        {DATA_CONSTANT.LANGUAGE.map((item: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleChangeLanguage(item.value)}
            style={styles.itemLanguageContainer}
          >
            <Text
              style={{
                color:
                  item.value === languageSelected
                    ? CThemes.colors.primary
                    : CThemes.colors.black5s,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </CBottomSheet>
  );
};
