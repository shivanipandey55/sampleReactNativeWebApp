import { TextInput } from 'react-native';
import React, { MutableRefObject } from 'react';
import { TextInputStyle } from './TextInput.Style';

type Props = {
  textInputStyle?: {};
  value: string;
  placeHolder?: string;
  onChangeText: (value: string) => void;
  onSubmitText?: () => {};
  ref?: MutableRefObject<any>;
};
export const TextInputField: React.FC<Props> = (props) => (
  <TextInput
    ref={props.ref}
    value={props.value}
    style={[TextInputStyle.textInput, props.textInputStyle]}
    placeholder={props.placeHolder}
    onChangeText={props.onChangeText}
    autoCapitalize="none"
    blurOnSubmit={false}
    onSubmitEditing={props.onSubmitText}
  />
);
