import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Counter App</Text>

        <CounterDisplay count={count} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.decrementButton]}
            onPress={decrement}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={reset}
            activeOpacity={0.7}
          >
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.incrementButton]}
            onPress={increment}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  incrementButton: {
    backgroundColor: '#27AE60',
  },
  decrementButton: {
    backgroundColor: '#E74C3C',
  },
  resetButton: {
    backgroundColor: '#3498DB',
    width: 100,
    borderRadius: 25,
    height: 50,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Home;
