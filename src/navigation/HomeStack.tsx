import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeAccountScreen, HomeScreen } from "@screens";
import React from "react";

export type HomeStackParamsList = {
  [SCREENS.HOME_SCREEN]: undefined;
  [SCREENS.HOME_ACCOUNT_SCREEN]: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamsList>();

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={SCREENS.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStackNavigator.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name={SCREENS.HOME_ACCOUNT_SCREEN}
        component={HomeAccountScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};
