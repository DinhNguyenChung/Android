import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name,setName] = useState<string>('Đinh Nguyên Chung');
  const [test, setTest] = useState({
    name : 'Đinh Nguyên Chung',
    age: 21,
    alert: "Hãy cố gắng học thật tốt nhé !",
  });
  const [count, setCount] = useState<number>(0);


  return (
    <View style={styles.container}> 
      <Text style= {styles.parent}> Hello ! {name}
          <Text style={styles.child}> Wellcom to Android</Text>
        </Text> 
      <Text>{test.alert}</Text>
      <StatusBar style="auto" />
      <View>
        {/* <Button title='Click me' onPress={() => alert('Đinh Nguyên Chung cố lên !')}/> */}
        <Button title='Increase' onPress={() => setCount(count + 1)}/>
        <Text>Count: {count}</Text>
      </View>
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
    fontWeight: "600"

  }
});
