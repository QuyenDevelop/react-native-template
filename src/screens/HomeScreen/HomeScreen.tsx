import { CButton, CDialog, CFloatingButton } from "@components";
import { DATA_CONSTANT, SCREENS } from "@configs";
import { useBoolean } from "@hooks";
import { useAppNavigation } from "@hooks";
import { CGlobalStyles } from "@shared";
import React, { FunctionComponent } from "react";
import { View } from "react-native";

export const HomeScreen: FunctionComponent = () => {
  const navigation = useAppNavigation();
  const [visible, enVisible, disVisible] = useBoolean();

  return (
    <View style={CGlobalStyles.flexCenter}>
      <CButton
        onPress={enVisible}
        name="đi đâu đó"
        buttonRightIconType={DATA_CONSTANT.ICON_TYPE.AntDesign}
        buttonRightIconName={"forward"}
      />
      <CDialog
        isVisible={visible}
        onClose={disVisible}
        title={"Đây là title nhé, tối đa 2 dòng"}
        message={"Đây là description nhé,  tối đa 2 dòng thôi nhé"}
        buttonCancelName={"Từ chối"}
        onPressCancel={() => console.log("Từ chối")}
        buttonAcceptName={"Đồng ý"}
        onPressAccept={() => console.log("Đồng ý")}
      />
      <CFloatingButton
        ListSupport={[
          {
            key: 1,
            title: "Estimated Price",
            image:
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
            onPress: () => {},
          },
          {
            key: 2,
            title: "Messenger",
            image:
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
            onPress: () => {},
          },
        ]}
        floatingImage={{
          uri: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
        }}
      />
    </View>
  );
};
