import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style= {styles.parent}> Hello ! Đinh Nguyên Chung 
          <Text style={styles.child}> Wellcom to Android</Text>
        </Text> 
      <Text>Hãy cố gắng học thật tốt nhé !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    color: 'red',
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  child: {
    color: 'blue',
    fontSize: 20,

  }
});
