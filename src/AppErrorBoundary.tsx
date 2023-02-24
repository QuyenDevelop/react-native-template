import { Images, translate } from "@shared";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import CodePush from "react-native-code-push";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";

export const AppErrorBoundary: React.FunctionComponent = () => {
  const handleRefreshApp = () => {
    // CodePush.restartApp();
  };

  return (
    <View style={styles.noDataContainer}>
      <FastImage
        source={Images.errorImage}
        style={styles.imgAppErrorBoundary}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.noResultTitle}>{translate("label.oops")}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleRefreshApp}>
        <Text style={styles.buttonTitle}>{translate("buttonRefresh")}</Text>
      </TouchableOpacity>
    </View>
  );
};
