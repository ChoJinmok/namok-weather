import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = (): React.JSX.Element => (
  <SafeAreaView style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
    </View>
    <View style={styles.weather}>
      <View style={styles.day}>
        <Text style={styles.temperature}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  temperature: {
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});

export default App;
