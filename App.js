import { StyleSheet, View } from 'react-native';
import TextField from "./components/TextField";

export default function App() {
  return (
    <View style={styles.container}>
        <TextField/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
