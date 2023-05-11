import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: 'red',
  },
});

// StyleSheet.create를 사용하지 않고 일반 객체 사용해도 가능
// 자동완성 기능을 활용하기 어렵다.
const anotherText = {
  fontSize: 21,
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styles Object (O)</Text>

      {/* 스타일을 객체 형태로 바로 작성해도 된다. */}
      <Text style={{ fontSize: 14 }}>Styles Object (X)</Text>

      <Text style={anotherText}>Object</Text>
      <StatusBar style="auto" />
    </View>
  );
}
