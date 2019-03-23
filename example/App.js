import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useBackHandler from '@rnhooks/back-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  type: {
    margin: 20,
    fontSize: 20,
  },
});

function App() {
  const count = useBackHandler('exit');
  console.log(count);

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Count: ${count}`}</Text>
    </View>
  );
}

export default App;
