import React from 'react';
import { View, Text,Button, StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native';
import XYZLines from '../components/XYZLines';

const AddVectorScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Visualizing the Added Vector</Text>
            <View>
                <Image source={require('./AddFormula.png')}  resizeMode="contain" style={styles.image} />
            </View>
            <View>
                <Image source={require('./Formula.png')}  resizeMode="contain" style={styles.image} />
            </View>
            <Text>
            </Text>
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

export default AddVectorScreen;