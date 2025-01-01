import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Expo Router untuk routing

// Komponen utama aplikasi
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Piride-UI</Text>
      <Link href="/home">
        <Button title="Go to Home" />
      </Link>
    </View>
  );
}

// Styling untuk komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
