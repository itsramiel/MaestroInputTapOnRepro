import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  return (
    <View style={styles.screen}>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: 'black',
          flexDirection: 'row',
          gap: 16,
        }}>
        <TextInput placeholder="Enter text" placeholderTextColor="red" />
        <Pressable style={{ width: 32, height: 32, backgroundColor: 'red' }}>
          <Text>Hello</Text>
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
