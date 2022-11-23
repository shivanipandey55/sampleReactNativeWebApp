import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
const SignUpStyle = StyleSheet.create({
  mainContainerWeb: {
    flex: 1,
    flexDirection: 'row',
  },
  headerTextHighLighted: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  headerText: {
    fontSize: 17,
  },
});
export default SignUpStyle;
