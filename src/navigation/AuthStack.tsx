import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@screens";
import React from "react";

export type AuthStackParamList = {
  [SCREENS.HOME_SCREEN]: undefined;
};

const AuthenticationNavigator =
  createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <AuthenticationNavigator.Navigator
      initialRouteName={SCREENS.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationNavigator.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
      />
    </AuthenticationNavigator.Navigator>
  );
};
