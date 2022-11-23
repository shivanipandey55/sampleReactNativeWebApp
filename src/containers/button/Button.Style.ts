import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
export const ButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 5,
    flexWrap: 'wrap',
    minHeight: 40,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 25,
    alignSelf: 'baseline',
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    tintColor: Colors.white,
  },
  text: { textAlign: 'center', color: 'white' },
});
