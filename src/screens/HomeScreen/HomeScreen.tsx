import { CButton } from "@components";
import { SCREENS, DATA_CONSTANT } from "@configs";
import { useAppNavigation } from "@hooks";
import { CGlobalStyles } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const HomeScreen: FunctionComponent = () => {
  const navigation = useAppNavigation();

  return (
    <View style={CGlobalStyles.flexCenter}>
      <CButton
        onPress={() => {
          navigation.navigate(SCREENS.ACCOUNT_STACK, {
            screen: SCREENS.HOME_ACCOUNT_SCREEN,
          });
        }}
        name="đi đâu đó"
        buttonRightIconType={DATA_CONSTANT.ICON_TYPE.AntDesign}
        buttonRightIconName={"forward"}
      />
    </View>
  );
};
