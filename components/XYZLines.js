import React from 'react';
import { View } from 'react-native';
import { Surface, Shape, Path } from '@react-native-community/art';

const generateXYZLines = () => {
  const path = Path()
    .moveTo(0, 0)  // Move to the starting point of the line
    .lineTo(100, 0)  // Draw a horizontal line
    .moveTo(0, 0)  // Move back to the starting point
    .lineTo(0, 100)  // Draw a vertical line
    .moveTo(0, 0)  // Move back to the starting point
    .lineTo(0, -100);  // Draw a vertical line in the opposite direction

  return path;
};

const XYZLines = () => {
  return (
    <View>
      <Surface width={200} height={200}>
        <Shape d={generateXYZLines()} stroke="#000000" strokeWidth={1} />
      </Surface>
    </View>
  );
};

export default XYZLines;
