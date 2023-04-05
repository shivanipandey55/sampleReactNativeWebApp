// import StorybookUIRoot from "./.ondevice/Storybook";
import React from "react";
import { StatusBar } from "react-native";
import { Dimensions, StyleSheet, View } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from "./src/core/store/store";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./src/theme/theme";
// import Config from "react-native-config";
const { height } = Dimensions.get("screen");
import "./src/i18n/index";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar animated={true} hidden={true} />
          <MainStack />
        </View>
      </PaperProvider>
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

// export default JSON.parse(Config.ENABLE_STORYBOOK ?? "false")
//   ? StorybookUIRoot
//   : App;
export default App;
