import React  from 'react';
import { Text,StyleSheet,View,TouchableOpacity,TextInput,Button } from 'react-native';
import MyVector from './components/myVector';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';
import { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './components/Header';
import AddVectorScreen from './screens/AddVectorScreen';
import ScaledVectorScreen from './screens/ScaledVectorScreen';
import MagScreen from './screens/MagScreen';
import DotScreen from './screens/DotScreen';
import CrossScreen from './screens/CrossScreen';




const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AddVectorScreen" component={AddVectorScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ScaledVectorScreen" component={ScaledVectorScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MagScreen" component={MagScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DotScreen" component={DotScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CrossScreen" component={CrossScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;