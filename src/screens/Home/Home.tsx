import React from 'react';
import { View, Text, Platform } from 'react-native';
import homeStyle from './Home.Styles';
const Home = () => {
  return (
    <View style={homeStyle.mainContainer}>
      <Text>Hello, this is {Platform.OS} application</Text>
    </View>
  );
};
export default Home;
