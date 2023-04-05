import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "../../containers/button/Button";
import AuthWrapper from "../../containers/template/AuthWrapper";
import { TextField } from "../../containers/text/Text";
import { TextInputField } from "../../containers/textInput/TextInput";
import SingUpController from "./controller/SignupController";
import signUpFormStyle from "./Signup.Styles";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();

  const { handleSignUp } = SingUpController();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const singUpClickHandler = () => {
    handleSignUp();
  };

  return (
    <AuthWrapper>
      <View
        style={{
          flex: 1,
          paddingHorizontal: "5%",
          paddingTop: "10%",
          backgroundColor: "white",
        }}
      >
        <TextField
          textStyle={signUpFormStyle.headerTextHighLighted}
          value={t("SignUp.hello")}
        />
        <TextField
          textStyle={signUpFormStyle.headerTextHighLighted}
          value={t("SignUp.good_morning")}
        />
        <View style={{ marginTop: 50, marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <TextField
              textStyle={signUpFormStyle.headerTextHighLighted}
              value={`${t("SignUp.create")} \n`}
            />
            <TextField
              textStyle={signUpFormStyle.headerText}
              value={t("SignUp.your_account")}
            />
          </View>
          <TextField value={t("SignUp.name")} />
          <TextInputField value={name} onChangeText={setName} />
          <TextField value={t("SignUp.email")} />
          <TextInputField value={email} onChangeText={setEmail} />
          <TextField value={t("SignUp.password")} />
          <TextInputField value={password} onChangeText={setPassword} />
        </View>
        <Button
          onclick={singUpClickHandler}
          btnText={t("SignUp.signUp")}
        ></Button>
      </View>
    </AuthWrapper>
  );
};
export default SignUp;
