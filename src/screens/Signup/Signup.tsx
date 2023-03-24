import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Button } from "../../containers/button/Button";
import AuthWrapper from "../../containers/template/AuthWrapper";
import { TextField } from "../../containers/text/Text";
import { TextInputField } from "../../containers/textInput/TextInput";
import SingUpController from "./controller/SignupController";
import signUpFormStyle from "./Signup.Styles";
const SignUp = () => {
  const { handleSignUp } = SingUpController();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordInput = useRef<any>(null);
  const navigation = useNavigation();

  const singUpClickHandler = () => {
    handleSignUp("Developer", "Developerss5@gmail.com", 1234567890)?.then(
      (res) => {
        console.log(res);

        if (res.result === 0) {
          navigation.dispatch(StackActions.replace("Home"));
        }
      }
    );
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
          value="Hello! "
        />
        <TextField
          textStyle={signUpFormStyle.headerTextHighLighted}
          value="Good Morning "
        />
        <View style={{ marginTop: 50, marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <TextField
              textStyle={signUpFormStyle.headerTextHighLighted}
              value="Create "
            />
            <TextField
              textStyle={signUpFormStyle.headerText}
              value="your account"
            />
          </View>
          <TextField value="Name" />
          <TextInputField value={name} onChangeText={setName} />
          <TextField value="Email" />
          <TextInputField value={email} onChangeText={setEmail} />
          <TextField value="Password" />
          <TextInputField
            value={password}
            ref={passwordInput}
            onChangeText={setPassword}
          />
        </View>
        <Button onclick={singUpClickHandler} btnText="SignUp"></Button>
      </View>
    </AuthWrapper>
  );
};
export default SignUp;
