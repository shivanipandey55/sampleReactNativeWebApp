import {
  DefaultTheme,
  MD3LightTheme,
  configureFonts,
} from "react-native-paper";
import Colors from "./colors";
import { fontConfig } from "./fontConfig";

export const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
  },
};
