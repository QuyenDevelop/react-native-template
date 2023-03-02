import { CButton, CIcon, CTextInput } from "@components";
import { useAppDispatch, useAppNavigation, useBoolean } from "@hooks";
import { CGlobalStyles, CThemes, translate } from "@shared";
import React, { useState } from "react";
import * as RNLocalize from "react-native-localize";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DATA_CONSTANT } from "@configs";

export const LoginScreen: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  // const [isRemember, setIsRemember] = useState(false);
  const [isLoading, showLoading, hideLoading] = useBoolean(false);
  // const locates = {
  //   locates: RNLocalize.getLocales(),
  // };

  const loginWithEmail = () => {};
  const loginWithGoogle = () => {};
  const loginWithFacebook = () => {};
  const loginWithApple = () => {};

  return (
    <View style={CGlobalStyles.appContent}>
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={CGlobalStyles.appContent}
      >
        <ScrollView
          style={styles.childContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{translate("label.login")}</Text>

          <CTextInput
            // editable={!isLoading}
            placeholder={translate("label.email")}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize={"none"}
            returnKeyType="next"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            onClearInput={() => {}}
            isRequired
            isHideClearText
          />
          <CTextInput
            editable={!isLoading}
            placeholder={translate("label.password")}
            returnKeyType="done"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={isSecure}
            onClearInput={() => {}}
            isRequired
            isHideClearText
            // iconRightName={isSecure ? "ic_eye" : "ic_eye_slash"}
            // iconRightSize={Metrics.icons.smallSmall}
            // onPressIconRight={() => setIsSecure(!isSecure)}
          />
          <View style={styles.space}>
            {/* <Checkbox
              checked={isRemember}
              onChange={() => {
                setIsRemember(!isRemember);
              }}
              title={translate("button.remember")}
            /> */}
            {/* <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}
            >
              <Text style={styles.forgotPassword}>
                {translate("button.forgotPassword")}
              </Text>
            </TouchableOpacity> */}
          </View>
          <CButton
            onPress={loginWithEmail}
            name={translate("label.login")}
            isLoading={isLoading}
          />
          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccount}>{translate("label.noAccount")}</Text>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.REGISTER)}
            >
              <Text style={styles.buttonCreate}>
                {translate("button.createAccount")}
              </Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.loginSocialContainer}>
            <View style={styles.line} />
            <Text style={styles.orLogin}>{translate("label.orLogin")}</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.loginSocialContainer}>
            <TouchableOpacity
              style={{
                ...styles.buttonSocial,
                borderColor: CThemes.colors.red5s,
              }}
              onPress={loginWithGoogle}
            >
              <CIcon
                type={DATA_CONSTANT.ICON_TYPE.Entypo}
                name={"google-"}
                color={CThemes.colors.red5s}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.buttonSocial,
                borderColor: CThemes.colors.brandB,
              }}
              onPress={loginWithFacebook}
            >
              <CIcon
                type={DATA_CONSTANT.ICON_TYPE.FontAwesome}
                name={"facebook"}
                size={24}
                color={CThemes.colors.brandB}
              />
            </TouchableOpacity>
            {Platform.OS === "ios" &&
            Number(Platform.Version.toString().split(".")[0]) >= 13 ? (
              <TouchableOpacity
                style={{
                  ...styles.buttonSocial,
                  borderColor: CThemes.colors.black6s,
                }}
                onPress={loginWithApple}
              >
                <CIcon
                  type={DATA_CONSTANT.ICON_TYPE.FontAwesome}
                  name={"apple"}
                  size={24}
                  color={CThemes.colors.black6s}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    paddingTop: CThemes.screenUtils.scale(16),
    paddingHorizontal: CThemes.screenUtils.scale(10),
  },
  space: {
    marginTop: CThemes.screenUtils.scale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginSocialContainer: {
    marginTop: CThemes.screenUtils.scale(16),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSocial: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: CThemes.screenUtils.scale(38),
    height: CThemes.screenUtils.scale(38),
    borderRadius: CThemes.screenUtils.scale(38),
    borderWidth: 2 * StyleSheet.hairlineWidth,
    marginHorizontal: CThemes.screenUtils.scale(4),
  },
  line: {
    width: CThemes.screenUtils.scale(60),
    height: CThemes.screenUtils.scale(2),
    backgroundColor: CThemes.colors.black2s,
  },
  orLogin: {
    marginHorizontal: CThemes.screenUtils.scale(8),
  },
  title: {
    ...CGlobalStyles.text24,
    ...CGlobalStyles.fontMedium,
    color: CThemes.colors.black6s,
    marginBottom: CThemes.screenUtils.scale(16),
  },
  noAccount: {
    ...CGlobalStyles.text14,
    ...CGlobalStyles.fontRegular,
    color: CThemes.colors.black5s,
  },
  noAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: CThemes.screenUtils.scale(8),
  },
});
