import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
const authWrapperStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  icon: {
    height: '30%',
    width: '100%',
  },
});
export default authWrapperStyle;
