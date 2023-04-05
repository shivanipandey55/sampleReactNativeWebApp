// import StorybookUIRoot from "./.ondevice/Storybook";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { Dimensions, StyleSheet, View } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from "./src/core/store/store";
import { Provider as PaperProvider, Snackbar } from "react-native-paper";
import { theme } from "./src/theme/theme";
// import Config from "react-native-config";
const { height } = Dimensions.get("screen");
import "./src/i18n/index";
import NetInfo from "@react-native-community/netinfo";

const App = () => {
  const [isNetConnected, setNetConnected] = React.useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setNetConnected(true);
      }
    });
    unsubscribe();
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar animated={true} hidden={true} />
          <MainStack />
          <Snackbar
            style={styles.snackbar}
            visible={isNetConnected}
            onDismiss={() => setNetConnected(false)}
          >
            No internet connected.
          </Snackbar>
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
    flex: 1,
  },
  snackbar: {
    width: Platform.OS === "web" ? "50%" : "90%",
    alignSelf: "center",
    backgroundColor: "green",
    color: "white",
  },
});

// export default JSON.parse(Config.ENABLE_STORYBOOK ?? "false")
//   ? StorybookUIRoot
//   : App;
export default App;
