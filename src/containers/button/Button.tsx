import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { ButtonStyle } from './Button.Style';
type Props = {
  btnText: string;
  onclick: () => void;
  disabled?: false;
  icon?: ImageSourcePropType;
  buttonStyle?: {};
  iconStyle?: {};
  textStyle?: {};
};
export const Button: React.FC<Props> = (props) => (
  <TouchableOpacity
    disabled={props.disabled}
    style={ButtonStyle.button}
    onPress={props.onclick}
  >
    <Text style={[ButtonStyle.text, props.textStyle]}>{props.btnText}</Text>
    {props.icon ? (
      <Image source={props.icon} style={[ButtonStyle.icon, props.iconStyle]} />
    ) : null}
  </TouchableOpacity>
);
