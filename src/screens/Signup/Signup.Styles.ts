import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import { theme } from "../../theme/theme";
const SignUpStyle = StyleSheet.create({
  mainContainerWeb: {
    flex: 1,
    flexDirection: "row",
  },
  headerTextHighLighted: {
    ...theme.fonts.headlineMedium,
    color: Colors.primary,
  },
  headerText: {
    ...theme.fonts.headlineMedium,
  },
});
export default SignUpStyle;
