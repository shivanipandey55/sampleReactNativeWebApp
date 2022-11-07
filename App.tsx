import React from 'react';
import { StatusBar } from 'react-native';
import { Dimensions, StyleSheet, Text, View, Platform } from 'react-native';
const { height } = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={true} />
      <View style={styles.center}>
        <Text>Welcome to {Platform.OS} Sample App</Text>
      </View>
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
