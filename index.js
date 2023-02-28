/**
 * @format
 */

import { AppRegistry, LogBox } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

LogBox.ignoreAllLogs(true);
console.reportErrorsAsExceptions = false;

AppRegistry.registerComponent(appName, () => App);
