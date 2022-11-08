import React from 'react';
import { StatusBar } from 'react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import MainStack from './src/navigation/MainStack';
const { height } = Dimensions.get('screen');
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={true} />
      <MainStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width: '100%',
    backgroundColor: 'pink',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
