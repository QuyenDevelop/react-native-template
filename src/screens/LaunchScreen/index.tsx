import { CONSTANT, DATA_CONSTANT, SCREENS } from "@configs";
import { useAppDispatch } from "@hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { asyncChangeLanguage, asyncSetAnonymousId } from "@redux";
import { AnimationImages, CGlobalStyles, CThemes } from "@shared";
import React, { FunctionComponent, useCallback, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as RNLocalize from "react-native-localize";
import uuid from "react-native-uuid";
// import styles from "./styles";
import LottieView from "lottie-react-native";

export const LaunchScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [locates] = useState({
    locates: RNLocalize.getLocales(),
  });

  const authenticate = async (): Promise<void> => {
    const [accessToken, anonymousId, language] = await Promise.all([
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ANONYMOUS_ID),
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.LANGUAGE),
    ]);
    console.log("🚀🚀🚀 => authenticate => accessToken", accessToken);
    const guid = uuid.v4();
    if (language != null) {
      dispatch(asyncChangeLanguage(language || CONSTANT.LANGUAGES.EN));
    } else if (locates.locates.length > 0) {
      let location = DATA_CONSTANT.LANGUAGE_CODE.find(
        x => x.code === locates.locates[0].languageCode,
      );
      dispatch(asyncChangeLanguage(location?.tag || CONSTANT.LANGUAGES.EN));
    }
    if (accessToken) {
      /**
       * @todo
       * call api get user profile và lưu vào Redux/AsyncStorage
       * move vào BOTTOM_TAB_STACK -> Home Screen
       */
      //   dispatch(getUserAction());
      //   dispatch(takeSetAnonymousId(guid));
      //   navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION);
    } else {
      if (anonymousId) {
        dispatch(asyncSetAnonymousId(anonymousId));
      } else {
        await AsyncStorage.setItem(
          CONSTANT.TOKEN_STORAGE_KEY.ANONYMOUS_ID,
          guid.toString(),
        );
        dispatch(asyncSetAnonymousId(guid));
      }
      navigation.navigate(SCREENS.AUTH_STACK, {
        screen: SCREENS.LOGIN_SCREEN,
      });
    }
  };

  const checkConnectivity = (): void => {
    NetInfo.fetch()
      .then((state: NetInfoState): void => {
        if (state.isConnected) {
          authenticate();
        } else {
          Alert.alert("You are offline!");
        }
      })
      .catch((): void => {
        Alert.alert("Error");
      });
  };

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        checkConnectivity();
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []),
  );
  return (
    <View style={CGlobalStyles.flexCenter}>
      <Text style={styles.title}>Template</Text>
      <LottieView
        style={styles.loadingView}
        autoPlay={true}
        loop={true}
        source={AnimationImages.launchAnimation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    position: "absolute",
    bottom: CThemes.screenUtils.scale(70),
    justifyContent: "center",
    alignSelf: "center",
    width: CThemes.screenUtils.scale(120),
    height: CThemes.screenUtils.scale(120),
  },
  title: {
    // fontFamily: FontFamily.bold,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    color: CThemes.colors.brandA,
  },
});
