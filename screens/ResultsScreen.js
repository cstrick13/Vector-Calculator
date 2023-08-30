import React, { useContext } from 'react';
import { View, Text,Button, StyleSheet,TouchableOpacity,ScrollView,Image,ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './HomeScreen';
import MyVector from '../components/myVector';
import LogContext from '../components/LogContext';

const ResultsScreen = ({route,navigation}) => {
    
    const goBackToHome = () => {
        navigation.goBack();
      };
      const logs = route.params.logs;

      const handleLogPress = (log) => {
        if(log.label == 'Scaled Vector'){
          navigation.navigate('ScaledVectorScreen');
        }else if(log.label == 'Added Vector'){
          navigation.navigate('AddVectorScreen');
        }else if(log.label == 'Magnitude'){
          navigation.navigate('MagScreen');
        }else if(log.label == 'Dot Product'){
          navigation.navigate('DotScreen');
        }else if(log.label == 'Cross Product'){
          navigation.navigate('CrossScreen');
        }
      };


      return (
       <ImageBackground source={require('./Chalk.jpg')} style={styles.imageBackground}>
        <View style={styles.container}>
           <ScrollView contentContainerStyle={styles.contentContainer} >
      {logs.map((log, index) => (
        <TouchableOpacity
          key={index}
          style={styles.box}
          onPress={() => handleLogPress(log)}
        >
          <Text style={styles.text}>{`${log.label}: ${JSON.stringify(log.value)}`}</Text>
        </TouchableOpacity>
      ))}
      <View>
        <Image source={require('./Star.png')}  resizeMode="contain" style={styles.image} />
        </View>
      </ScrollView>
        </View>
        </ImageBackground>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
      },
      leftCircle: {
        position: 'absolute',
        width: 200,
        height: 200,
        backgroundColor:'pink',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        borderRadius: 100,
        top:50,
      },
      image: {
        width:330,
        height:350, // Adjust the width and height as needed
        position:'absolute',
        alignSelf:'center',
        bottom:-340,
        right:-50
      },
      imageBackground: {
        flex:1,
      },
      header: {
        top:0,
        height:100,
        width:100,
        backgroundColor: 'yellow', // Header background color
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE', // Border color
        elevation: 5, // For Android shadow effect
        shadowColor: '#000', // For iOS shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        top: 0, // Header title color
      },
      text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // Red color
      },
      box:{
        margin:10,
        padding: 12,
        backgroundColor : '#2A9D8F',
        borderRadius:10,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8, // For Android shadow effect
        shadowColor: '#000', // For iOS shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity:.8,
        shadowRadius: 2,
        top:20,
      },
      gradientBackground: {
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
export default ResultsScreen;