import React from 'react';
import { Image } from 'react-native';
import { IconStyle } from './Icon.Style';
type Props = {
  data: string;
  imageStyle?: {};
};
export const Icon: React.FC<Props> = (props) => (
  <Image
    source={{
      uri: props.data,
    }}
    style={[IconStyle.icon, props.imageStyle]}
  />
);
