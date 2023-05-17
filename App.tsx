import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const App = (): React.JSX.Element => (
  <SafeAreaView style={styles.container}>
    <View style={[styles.box, styles.box1]} />
    <View style={[styles.box, styles.box2]} />
    <View style={[styles.box, styles.box3]} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'tomato',
  },
  box2: {
    backgroundColor: 'royalblue',
    flex: 1.5,
  },
  box3: {
    backgroundColor: 'palegreen',
  },
});

export default App;
