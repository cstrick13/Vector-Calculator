import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SVGShape = () => {
  return (
    <View style={styles.container}>
      <Svg width={100} height={100} viewBox="0 0 100 100">
        <Path d={'./blob.svg'} fill="#4285F4" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SVGShape;
