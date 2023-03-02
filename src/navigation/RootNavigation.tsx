import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountStack } from "./AccountStack";
import { AuthStack } from "./AuthStack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { LaunchScreen } from "@screens";

export type RootStackParamList = {
  [SCREENS.LAUNCH_SCREEN]: undefined;
  [SCREENS.AUTH_STACK]: undefined;
  [SCREENS.ACCOUNT_STACK]: undefined;
  [SCREENS.BOTTOM_TAB_NAVIGATION]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LAUNCH_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={SCREENS.LAUNCH_SCREEN} component={LaunchScreen} />
      <RootStack.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />
      <RootStack.Screen name={SCREENS.ACCOUNT_STACK} component={AccountStack} />
      <RootStack.Screen
        name={SCREENS.BOTTOM_TAB_NAVIGATION}
        component={BottomTabNavigation}
        options={{
          gestureEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};
