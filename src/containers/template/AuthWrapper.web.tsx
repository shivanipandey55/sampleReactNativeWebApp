import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Icon } from '../icon/Icon';
import style from './AuthWrapper.Styles';
type Props = {
  children: ReactNode;
};
const AuthWrapper: React.FC<Props> = ({ children }) => {
  return (
    <View style={style.mainContainer}>
      <Icon
        data="https://cdn.dribbble.com/users/1996505/screenshots/4694623/media/916cc01bf6328c768688daeddbb5b655.png?compress=1&resize=400x300"
        imageStyle={style.icon}
      />
      {children}
    </View>
  );
};
export default AuthWrapper;
