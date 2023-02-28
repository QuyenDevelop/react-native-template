import { CButton, CSearch } from "@components";
import { DATA_CONSTANT, SCREENS } from "@configs";
import { useAppNavigation, useBoolean } from "@hooks";
import { CGlobalStyles } from "@shared";
import * as React from "react";
import { View } from "react-native";

export const HomeScreen: React.FunctionComponent = () => {
  const navigation = useAppNavigation();
  const [visible, enVisible, disVisible] = useBoolean();

  const goSomeWhere = () => {
    navigation.navigate(SCREENS.ACCOUNT_STACK, {
      screen: SCREENS.HOME_ACCOUNT_SCREEN,
      params: {},
    });
  };

  return (
    <View style={CGlobalStyles.appContent}>
      <View style={CGlobalStyles.flexCenter}>
        <CButton
          onPress={goSomeWhere}
          name="đi đâu đó"
          buttonRightIconType={DATA_CONSTANT.ICON_TYPE.AntDesign}
          buttonRightIconName={"forward"}
        />
      </View>
      {/* <CDialog
        isVisible={visible}
        onClose={disVisible}
        title={"Đây là title nhé, tối đa 2 dòng"}
        message={"Đây là description nhé,  tối đa 2 dòng thôi nhé"}
        buttonCancelName={"Từ chối"}
        onPressCancel={() => console.log("Từ chối")}
        buttonAcceptName={"Đồng ý"}
        onPressAccept={() => console.log("Đồng ý")}
      /> */}
    </View>
  );
};
