import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
const authWrapperStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  },
  icon: {
    height: '100%',
    width: '50%',
  },
});
export default authWrapperStyle;
