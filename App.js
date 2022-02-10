import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Pages/Login';
import Signup from './pages/Signup';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Signup/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    marginVertical:30,
    marginHorizontal:20
    // justifyContent: 'center',
  },
});
