import React from 'react';
import { View, Text,Button, StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native';


const MagScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./Magnitude.png')}  resizeMode="contain" />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'white'
    },
    gridRow: {
        flexDirection: 'row',
        height: 1,
        marginTop: 10,
        marginBottom: 10,
      },
      gridColumn: {
        flex: 1,
        height: '100%',
        backgroundColor: 'black',
        marginLeft: 5,
        marginRight: 5,
      },
});

export default MagScreen;