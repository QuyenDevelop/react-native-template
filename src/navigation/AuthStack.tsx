import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@screens";
import React from "react";

export type AuthStackParamList = {
  [SCREENS.LOGIN_SCREEN]: undefined;
};

const AuthenticationNavigator =
  createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <AuthenticationNavigator.Navigator
      initialRouteName={SCREENS.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationNavigator.Screen
        name={SCREENS.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </AuthenticationNavigator.Navigator>
  );
};
