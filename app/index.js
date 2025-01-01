import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';  // Menggunakan Link dari expo-router untuk routing

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Piride-UI!</Text>
      <Link href="/home">
        <Text style={styles.link}>Go to Home</Text>
      </Link>
    </View>
  );
}

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
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});
