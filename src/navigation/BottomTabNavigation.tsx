/* eslint-disable react-native/no-inline-styles */
import { SCREENS } from "@configs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images } from "@shared";
import React from "react";
import { Image, Platform, Text, View } from "react-native";
import { AccountStack } from "./AccountStack";
import { HomeStack } from "./HomeStack";

const Tab = createBottomTabNavigator();

const getTabBarIconImage = (
  icon: any,
  iconFill: any,
  title: string,
  focused: boolean
) => (
  <View
    style={{
      width: 100,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image source={focused ? iconFill : icon} />
    <Text
      numberOfLines={1}
      style={[
        {
          marginTop: 6,
          marginBottom: 10,
          textAlign: "center",
        },
        focused ? { color: "orange" } : { color: "black" },
      ]}
    >
      {title}
    </Text>
  </View>
);

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME_STACK}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: Platform.OS === "ios" ? 16 : undefined,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icHome,
              Images.icHomeFill,
              "Trang chủ",
              focused
            ),
        }}
      />

      <Tab.Screen
        name={SCREENS.ACCOUNT_STACK}
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icMyJanbox,
              Images.icMyJanboxFill,
              "Cá nhân",
              focused
            ),
        }}
      />
    </Tab.Navigator>
  );
};
