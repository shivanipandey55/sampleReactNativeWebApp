import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const TextInputStyle = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderBottomColor: Colors.textPrimary,
    padding: 8,
    marginVertical: 8,
    minWidth: 300,
    minHeight: 40,
  },
});
