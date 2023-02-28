import { CHeader, CSearch, HeaderIcon } from "@components";
import { CGlobalStyles } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { DATA_CONSTANT } from "@configs";

export const HomeAccountScreen: FunctionComponent = () => {
  const [text, setText] = React.useState("");

  const listIcon: HeaderIcon[] = [
    {
      name: "book",
      type: DATA_CONSTANT.ICON_TYPE.AntDesign,
    },
    {
      name: "close",
      type: DATA_CONSTANT.ICON_TYPE.AntDesign,
    },
  ];

  return (
    <View style={CGlobalStyles.appContent}>
      <CHeader title={"Account Screen"} iconRights={listIcon} />
      <View style={CGlobalStyles.flexCenter}>
        <CSearch
          value={text}
          onChangeText={setText}
          onClearInput={() => setText("")}
        />
      </View>
    </View>
  );
};
