import StorybookUIRoot from "./.ondevice/Storybook";
import React from "react";
import { StatusBar } from "react-native";
import { Dimensions, StyleSheet, View } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from "./src/core/store/store";
const { height } = Dimensions.get("screen");
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar animated={true} hidden={true} />
        <MainStack />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width: "100%",
    backgroundColor: "pink",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
module.exports = __DEV__ ? StorybookUIRoot : App;
