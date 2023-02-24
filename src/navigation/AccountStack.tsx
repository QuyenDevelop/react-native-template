import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeAccountScreen, AccountInformationScreen } from "@screens";
import React from "react";

export type AccountStackParamList = {
  [SCREENS.HOME_ACCOUNT_SCREEN]: undefined;
  [SCREENS.ACCOUNT_INFORMATION_SCREEN]: undefined;
};

const AccountNavigator = createNativeStackNavigator<AccountStackParamList>();

export const AccountStack = () => {
  return (
    <AccountNavigator.Navigator
      initialRouteName={SCREENS.HOME_ACCOUNT_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountNavigator.Screen
        name={SCREENS.HOME_ACCOUNT_SCREEN}
        component={HomeAccountScreen}
      />
      <AccountNavigator.Screen
        name={SCREENS.ACCOUNT_INFORMATION_SCREEN}
        component={AccountInformationScreen}
      />
    </AccountNavigator.Navigator>
  );
};
