import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactNode } from "react";
import { Image, Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Main: undefined;
    Scan: undefined;
    Call:undefined;
};



export default function Main(): React.JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Main'>>();

    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.main}
                source={require('../assets/img/MainPage-blank.png')}
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
                    <Image
                        source={require('../assets/img/Scan-Tag.png')}
                        style={styles.imageMiddle}
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
    },
    bottomRow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        paddingBottom: 0, // Add some padding at the bottom
        zIndex: 10,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonMiddle: {
        flex: 2.4, // Increased flex to make the middle button larger
        alignItems: 'center',
        justifyContent: 'center',
        width: 190, // Increased width
        height: 200, // Increased height by 30 pixels
    },
    image: {
        width: 100, // Set a fixed width for the images
        height: 100, // Set a fixed height for the images
        marginTop:90,
        resizeMode: 'contain',
    },
    imageMiddle: {
        width: 210, // Set a fixed width for the images
        height: 210, // Set a fixed height for the images
        resizeMode: 'contain',
    },
});
