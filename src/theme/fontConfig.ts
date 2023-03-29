import { Platform } from "react-native";
import Colors from "./colors";

export const fontConfig = {
  fontFamily: Platform.select({
    web: "Lato",
    ios: "Lato",
    default: "Lato",
  }),
  color: Colors.textPrimary,
} as const;
