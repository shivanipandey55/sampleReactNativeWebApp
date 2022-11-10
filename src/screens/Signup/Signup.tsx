import React, { useRef, useState } from 'react';
import { View, Text, Platform, Button } from 'react-native';
import { TextInputField } from '../../containers/textInput/TextInput';
import SingUpController from './controller/SignupController';
import homeStyle from './Signup.Styles';
const SignUp = () => {
  const { handleSignUp } = SingUpController();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordInput = useRef<any>(null);
  const singUpClickHandler = () => {
    handleSignUp();
  };
  return (
    <View style={homeStyle.mainContainer}>
      <Text>Hello, this is {Platform.OS} application</Text>
      <Button onPress={singUpClickHandler} title="trial"></Button>
      <TextInputField
        value={email}
        placeHolder="Email"
        onChangeText={setEmail}
      />
      <TextInputField
        value={password}
        placeHolder="Password"
        ref={passwordInput}
        onChangeText={setPassword}
      />
    </View>
  );
};
export default SignUp;
