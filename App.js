import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const[age,setAge] = useState('')
  const[lower, setLower] = useState('')
  const[higher, setHigher] = useState('')

  function calculate(){
    const lowerRate = Math.round((220-age) * 0.65)
    setLower(lowerRate)
    const higherRate = Math.round((220-age) * 0.85)
    setHigher(higherRate)
  }

  return (
    <View style={styles.container}>
      <Text styles={styles.field}>Age</Text>
      <TextInput keyboardType='decimal-pad' 
      value ={age}
      onChangeText={text => setAge(text)}/>
      <Text styles={styles.field}>Hr limits</Text>
      <Text styles={styles.field}>{lower} - {higher}</Text>
      <Button onPress={calculate} title ="Count"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 8,
  }
});
