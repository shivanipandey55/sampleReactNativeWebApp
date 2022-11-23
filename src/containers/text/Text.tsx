import React from 'react';
import { Text } from 'react-native';
import { TextStyle } from './Text.Style';
type Props = {
  textStyle?: {};
  value: string;
};
export const TextField: React.FC<Props> = (props) => (
  <Text style={[TextStyle.text, props.textStyle]}>{props.value}</Text>
);
