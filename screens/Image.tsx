import React from 'react';
import { ColorMatrix } from 'react-native-color-matrix-image-filters';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { DoorImageProps } from '../constant/RoutingType';

const DoorImage: React.FC<DoorImageProps> = ({ route, navigation }) => {
  const colorRgb = hexToRgb(route.params.data.color_code);

  function hexToRgb(hex: string | null) {
    if (!hex) return null;
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16),
        }
      : null;
  }

  // Ensure this is a 20-element tuple
  const colorMatrix: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] = colorRgb
    ? [
        colorRgb.red / 255, 0, 0, 0, 0,
        0, colorRgb.green / 255, 0, 0, 0,
        0, 0, colorRgb.blue / 255, 0, 0,
        0, 0, 0, 1, 0,
      ]
    : [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
      ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          style={{ width: '100%', height: '99%' }}
          source={require('../assets/img/TOP.png')}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Image</Text>
        </View>
        <View style={[styles.infoContainer]}>
          <ColorMatrix matrix={colorMatrix}>
            <Image
              source={{
                uri: `http://alpacnz.co.nz/apl/door_images/images/${route.params.data.imageUrl}.jpg`,
              }}
              style={{ width: route.params.data.width, height: route.params.data.height, resizeMode: 'center' }}
            />
          </ColorMatrix>
        </View>
      </View>
      <View style={styles.btnCloseContainer}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            style={styles.btnClose}
            onPress={() => navigation.navigate('Main')}
          >
            <Text style={styles.btnCloseText}>Close</Text>
          </TouchableOpacity>
          <View></View>
        </View>
      </View>
    </View>
  );
};
    const styles = StyleSheet.create({
    
      header: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
      headerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#151a42',
        
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderWidth: 5,
        alignContent: 'center',
        
        width: '100%',
      },
      container: {
        flex: 8,
        borderColor: '#ddd',
        margin: 20,
        marginTop: 5,
        alignItems: 'center',
        padding: 0,
        borderRadius: 10,
        borderWidth: 5,
        flexDirection: 'column',
      },
      textContainer: {
        flex: 10,
        justifyContent: 'flex-start',
        backgroundColor: '#151a42',
        height: 30,
      },
      headerText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      infoContainer: {
        flex: 20,
        width: '100%',
        height: '100%',
    
          marginHorizontal:10,
        justifyContent: 'space-around',
        
      },
    
      btnCloseContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnClose: {
        width: '70%',
        height: 40,
        backgroundColor: '#151a42',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      btnCloseText: {color: 'white'},
      scrollView: {
        flex: 3,
      },
      infoBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#ddd',
        elevation: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
      },
      text: {marginVertical: 10},
      btnClose1: {
        width: '70%',
        height: 40,
        backgroundColor: '#151a42',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
    });
    export default DoorImage;
    