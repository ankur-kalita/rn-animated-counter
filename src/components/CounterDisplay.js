import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const CounterDisplay = ({ count }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Reset animations
    scaleAnim.setValue(1.3);
    fadeAnim.setValue(0.5);

    // Run scale and fade animation when count changes
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [count]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.counterText,
          {
            transform: [{ scale: scaleAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        {count}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  counterText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
});

export default CounterDisplay;
