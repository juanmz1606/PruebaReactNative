import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>¡Hola desde React Native!</Text>
        <Text style={styles.counter}>Has presionado {count} veces</Text>
        <Button title="Presióname" onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  counter: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default App;
