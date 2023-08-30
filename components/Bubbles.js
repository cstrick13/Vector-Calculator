import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Bubble = ({ translateY }) => (
  <Animated.View style={[styles.bubble, { transform: [{ translateY }] }]} />
);

const Bubbles = () => {
  const bubbleAnimations = useRef([]);

  useEffect(() => {
    bubbleAnimations.current = bubbleAnimations.current.map(() =>
      Animated.timing(new Animated.Value(0), {
        toValue: -200,
        duration: 5000,
        useNativeDriver: true,
        isInteraction: false,
      })
    );

    Animated.loop(Animated.stagger(1000, bubbleAnimations.current)).start();

    return () => {
      bubbleAnimations.current.forEach((animation) => animation.stop());
    };
  }, []);

  return (
    <View style={styles.container}>
      {bubbleAnimations.current.map((animation, i) => (
        <Bubble key={i} translateY={animation} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bubble: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    marginBottom: 16,
  },
});

export default Bubbles;
