import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const App = (): React.JSX.Element => (
  <SafeAreaView style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
    </View>

    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}

      // ScrollView의 스타일은 contentContainerStyle로 지정
      // contentContainerStyle={styles.weather}

      // indicatorStyle은 iOS에서만 동작
      // indicatorStyle="white"
    >
      {Array.from({length: 10}).map((_, index) => (
        <View key={index} style={styles.day}>
          <Text style={styles.temperature}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      ))}
    </ScrollView>
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
  weather: {},
  day: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    width: SCREEN_WIDTH,
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
