/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { RootNavigator, RootStackParamList } from "@navigation";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { CGlobalStyles } from "@shared";
import React from "react";
import {
  Platform,
  StatusBar,
  Text,
  UIManager,
  useColorScheme,
  View,
} from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppErrorBoundary } from "./AppErrorBoundary";
import DropdownAlert from "react-native-dropdownalert";
import { DropdownMessageHolder } from "@helpers";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AwesomeApp = () => {
  const isDarkMode = useColorScheme() === "dark";
  const navigationRef = createNavigationContainerRef<RootStackParamList>();

  return (
    <View style={CGlobalStyles.appContent}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
      <DropdownAlert
        ref={ref => {
          if (ref) {
            DropdownMessageHolder.setDropDown(ref);
          }
        }}
        closeInterval={2000}
        updateStatusBar={Platform.OS === "ios"}
      />
    </View>
  );
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={AppErrorBoundary}>
      <Provider store={store}>
        <SafeAreaProvider>
          <AwesomeApp />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
