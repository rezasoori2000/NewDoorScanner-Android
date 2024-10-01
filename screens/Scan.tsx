import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Linking,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {  RootStackParamList, ScanProps } from '../constant/RoutingType';
NfcManager.start();

const Scan: React.FC<ScanProps> = ({navigation}) => {
  const [nfcTag, setNfcTag] = useState<string | null>(null);


  const readNfc = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.FelicaIOS); 
      const tag = await NfcManager.getTag();

      if (tag?.id) {
        setNfcTag(tag.id);
        const id=tag.id;
        navigation.push('Brief',{nfc:id})
      }

    } catch (ex) {
      console.warn('NFC Error:', ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  useEffect(() => {
    return () => {
      NfcManager.cancelTechnologyRequest();
    };
  }, []);
useEffect(() => {
    if(readNfc)
        readNfc();
},[]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
    <Image
      style={styles.main}
      source={require('../assets/img/Scan-blank.png')}
    />

<View style={styles.bottomRow}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
                  Linking.openURL('https://aplnz.co.nz');
              }}
          >
              <Image
                  source={require('../assets/img/Button-website.png')}
                  style={styles.image}
              />
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.buttonMiddle}
              onPress={() => {}}
          >
    <FastImage
      source={require('../assets/img/sonar.gif')} // Update with your actual path
      style={styles.gif}
      resizeMode={FastImage.resizeMode.contain}
      
    />
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Call')}
          >
              <Image
                  source={require('../assets/img/Contact.png')}
                  style={styles.image}
              />
          </TouchableOpacity>
      </View>

  
  </View>
  );
};

const styles = StyleSheet.create({
    main: {
      width: '100%',
      height: '100%',
      zIndex: 1,
      position:'absolute',
    },
    bottomRow: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal:0,
      paddingBottom: 0, // Add some padding at the bottom
      zIndex: 10,
  },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  image: {
      width: 100, // Set a fixed width for the images
      height: 100, // Set a fixed height for the images
      marginTop:90,
      resizeMode: 'contain',
  },
    gif: {
      width: 170, 
      height: 170,
      position: 'absolute',
      bottom: 20,
      zIndex: 2,
    },
  
    buttons: {
      flex: 1,
      height: 130,
    },
    buttonMiddle: {
      flex: 1.5,
      height: 160,
      marginTop: 0,
    },
  });

export default Scan;
