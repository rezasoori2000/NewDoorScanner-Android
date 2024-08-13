import { ReactNode } from "react";
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
   
} from 'react-native';
import FastImage from 'react-native-fast-image'; 
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
//NfcManager.start();

function Scan():ReactNode{
    //readNfc();
    // async function readNfc() {
    //     try {
    //       if (val === 0) {
    //         setVal(1);
            
    //         await NfcManager.requestTechnology(NfcTech.Ndef);
    //         const tag = await NfcManager.getTag();
    //         //console.warn("TAGID: "+tag.id);
    //         // console.warn('TAG: ' + JSON.stringify(tag));
    //         if (tag){
    //         setText(tag.id as string);
    //         //"04:60:e6:92:b4:57:80"
    // console.warn(tag.id as string);
    //         //props.navigation.navigate('brief', {nfc: tag.id});
    //         }
    //       }
    //     } catch (ex) {
           
    //       //console.warn('Oops!', ex);
    //     //  setText(ex.message);
    //     } finally {
    //       NfcManager.cancelTechnologyRequest();
    //     }
    //   }
      const [text, setText] = useState('no');
      const [val, setVal] = useState(0);
      type RootStackParamList = {
        Main: undefined;
        Scan: undefined;
        Call:undefined;
    };
    
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Main'>>();
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
                    onPress={() => navigation.navigate('Scan')}
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
    }
    
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
          marginTop: -30,
        },
      });
      export default Scan;