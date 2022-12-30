import { StyleSheet, View } from 'react-native';
import TextField from "./components/TextField";
import Control from './components/Control';

export default function App() {
  return (
    <View style={styles.container}>
        <TextField/>
        <Control/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C22E',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
});
