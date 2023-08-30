import React, { useContext,useEffect, useRef }  from 'react';
import { Text,StyleSheet,View,TouchableHighlight,TextInput,Button,Animated,Dimensions,ImageBackground,Image} from 'react-native';
import MyVector from '../components/myVector';
import LogContext from '../components/LogContext';
import randomColor from 'randomcolor';
import CustomButton from '../css/CustomButton';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const randomSize = () => {
  const minSize = 20;
  const maxSize = 80;
  return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
};


const Bubble = ({ id, initialPosition, initialX, duration }) => {
  const position = useRef(new Animated.Value(initialPosition)).current;
  const isAnimating = useRef(false);
  const [bubbleColor, setBubbleColor] = useState(randomColor());
  const [bubbleSize, setBubbleSize] = useState(randomSize());
  

  const animateBubble = () => {
    if (!isAnimating.current) {
      isAnimating.current = true;

      Animated.timing(position, {
        toValue: -200,
        duration: duration, // Use the provided duration
        useNativeDriver: true,
      }).start(() => {
        position.setValue(initialPosition);
        isAnimating.current = false;
        setBubbleColor(randomColor());
        setBubbleSize(randomSize());
        animateBubble();
      });
    }
  };

  useEffect(() => {
    animateBubble();
  }, []);

  const animatedStyle = {
    transform: [
      { translateY: position },
      { translateX: initialX },
    ],
    backgroundColor: bubbleColor,
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    zIndex: -1, 
    opacity: 0.7,
  };

  return <Animated.View style={[styles.bubble, animatedStyle]} />;
};



const HomeScreen = ({navigation}) => {
  const [vector1, setVector1] = React.useState({ x: 0, y: 0, z: 0 });
  const [vector2, setVector2] = React.useState({ x: 0, y: 0, z: 0 });
  const [scaleFactor, setScaleFactor] = useState('');
  const [scaledValue, setScaledValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const getRandomDuration = () => {
    return Math.floor(Math.random() * (6000 - 4000 + 1) + 4000); 
  };

  const getRandomDurationLong = () => {
    return Math.floor(Math.random() * (6000 - 4000 + 1) + 5000); 
  };

  const getRandomY = () =>{
    return Math.floor(Math.random() * (1000 - 900 + 1)) + 900;
  }

  const getRandomYLong = () =>{
    return Math.floor(Math.random() * (1000 - 900 + 1)) + 950;
  }

  const getRandomX = () =>{
    return Math.floor(Math.random() * (250 - 75 + 1)) + 75;
  }

  

  const screenWidth = Dimensions.get('window').width;
  const bubbles = [
    { id: 1, initialPosition: getRandomY(), initialX: getRandomX(), duration: getRandomDurationLong() },
    { id: 2, initialPosition: getRandomY(), initialX: getRandomX(), duration: getRandomDurationLong()},
    { id: 3, initialPosition: getRandomYLong(), initialX: getRandomX(), duration: getRandomDuration()},
    { id: 4, initialPosition: getRandomY(), initialX: getRandomX(), duration: getRandomDurationLong() },
    { id: 5, initialPosition: getRandomY(), initialX:getRandomX(), duration: getRandomDurationLong()},
    { id: 6, initialPosition: getRandomYLong(), initialX: getRandomX(), duration: getRandomDuration()},
    { id: 7, initialPosition: getRandomYLong(), initialX: getRandomX(), duration: getRandomDuration()},
    { id: 8, initialPosition: getRandomY(), initialX: getRandomX(), duration:getRandomDurationLong()},
    { id: 9, initialPosition: getRandomY(), initialX: getRandomX(), duration:getRandomDurationLong()},
    { id: 11, initialPosition: getRandomY(), initialX: getRandomX(), duration: getRandomDuration()},
    { id: 12, initialPosition: getRandomY(), initialX: getRandomX(), duration: getRandomDurationLong()},
    { id: 13, initialPosition: getRandomYLong(), initialX: getRandomX(), duration: getRandomDuration()},
    { id: 14, initialPosition: getRandomY(), initialX: getRandomX(), duration: getRandomDurationLong()},
    { id: 15, initialPosition: getRandomYLong(), initialX: getRandomX(), duration: getRandomDuration()},
  ];

  

  const handleVector1Change = (key, value) => {
    setVector1((prevVector1) => ({
      ...prevVector1,
      [key]: parseFloat(value),
    }));
  };

  const handleVector2Change = (key, value) => {
    setVector2((prevVector2) => ({
      ...prevVector2,
      [key]: parseFloat(value),
    }));
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  
  const handleScale = () => {
    const intValue = parseInt(inputValue, 10); 
    if (!isNaN(intValue)) {
      const scaledVector = myVector1.scale(intValue);
      setScaledValue(scaledVector);
    }
  };


  const myVector1 = new MyVector(vector1.x, vector1.y, vector1.z);
  const myVector2 = new MyVector(vector2.x, vector2.y, vector2.z);

  const addedVector = myVector1.add(myVector2);
  const magnitude = myVector1.magnitude();
  const dotProduct = myVector1.dotProduct(myVector2);
  const crossProduct = myVector1.crossProduct(myVector2);

  const logs = [
    { label: 'Added Vector', value: addedVector },
    { label: 'Scaled Vector', value: scaledValue},
    { label: 'Magnitude', value: magnitude },
    { label: 'Dot Product', value: dotProduct },
    { label: 'Cross Product', value: crossProduct },
  ];

  console.log(logs);


  const navigateToResultsScreen = () => {
    navigation.navigate('Results', { logs: logs });
  };

  const LOG = useContext(LogContext);

  return (
    <LogContext.Provider value={logs}>
      <ImageBackground source={require('./Sky.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
    <View style={styles.bubbleContainer}>
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            initialPosition={bubble.initialPosition}
            initialX={bubble.initialX}
            duration={bubble.duration}
          />
        ))}
      </View>
        <Text style={styles.circleText}>Vector Calculator</Text>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Vector 1:</Text>
          <TextInput
            style={styles.input}
            placeholder="X"
            onChangeText={(value) => handleVector1Change('x', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Y"
            
            onChangeText={(value) => handleVector1Change('y', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Z"
            
            onChangeText={(value) => handleVector1Change('z', value)}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Vector 2:</Text>
          <TextInput
            style={styles.input}
            placeholder="X"
            
            onChangeText={(value) => handleVector2Change('x', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Y"
            
            onChangeText={(value) => handleVector2Change('y', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Z"
            
            onChangeText={(value) => handleVector2Change('z', value)}
          />
        </View>
        <View style={styles.scaleButtonContainer}>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={handleScale}
          style={styles.scaleButton}
        >
          <>
            <Text style={styles.scaleButtonText}>Scale</Text>
            <TextInput
              onChangeText={handleInputChange}
              value={inputValue}
              
              style={styles.textInput}
            />
          </>
        </TouchableHighlight>
      </View>
        <View style={styles.buttonContainer}>
          <CustomButton
        title="Calculate"
        onPress={navigateToResultsScreen}
        />
        </View>
        <View style={styles.buttonContainer}>
      
        </View>
       
        
        <View>
        <Image source={require('./Brain.png')}  resizeMode="contain" style={styles.image} />
        </View>
    </View>
    </ImageBackground>
    </LogContext.Provider>
   
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    scaleButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    scaleButton: {
      backgroundColor: 'lightblue',
      alignItems:'center',
      top:5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    scaleButtonText: {
      color: 'black',
      fontWeight: 'bold',
    },
    textInput: {
      backgroundColor: 'lightgrey',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
      width: 60,
    },
    backgroundImage: {
      flex: 1,
    },
    image: {
      width: 420, 
      position:'absolute',
      height: 420,
      alignSelf:'center',
      bottom:-410,
    },
    box: {
      width: 300,
      height: 60,
      backgroundColor: 'lightgray',
      borderRadius: 10,
      marginVertical: 10,
      paddingHorizontal: 20,
      justifyContent: 'center',
      
    },
    bubbleContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    bubble: {
      position: 'absolute',
      width: 50,
      height: 50,
      borderRadius: 25,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
    },
    text: {
      fontSize: 16,
    },
    circleText: {
      fontSize: 40,
      fontStyle:'italic',
      fontWeight: 'bold',
      color: 'white',
      alignSelf:'center',
      bottom:50
    },
    inputContainer: {
      backgroundColor: 'lightblue',
      borderRadius: 8,
      top:10,
      marginBottom: 10,
      flexDirection:'row',
      padding:10,
      alignItems: 'center',
      
    },
    circle: {
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 8,
      position: 'absolute',
      top: 1,
    },
    circleLeft:{
      width: 150,
      height: 150,
      borderRadius: 125,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 8,
      position: 'absolute',
      top: 50,
      right: 225,
      marginRight: -100,
    },
    buttonContainer: {
      bottom:10,

    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
    },
    input: {
      height: 40,
      backgroundColor: 'lightgrey',
      borderRadius: 4,
      paddingHorizontal: 8,
    },
  });

export default HomeScreen;