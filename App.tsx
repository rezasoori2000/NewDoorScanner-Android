/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Main from './screens/Main';
import Scan from './screens/Scan';
import Call from './screens/Call';
import Brief from './screens/Brief';
import { RootStackParamList } from './constant/RoutingType';
import DoorImage from './screens/Image';
import Detail from './screens/Detail';





const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen options={{ headerShown: false }}  name="Main" component={Main} /> 
        <Stack.Screen options={{ headerShown: false }}  name="Scan" component={Scan}/>
        <Stack.Screen options={{ headerShown: false }}  name="Call" component={Call}/>
        <Stack.Screen options={{ headerShown: false }}  name="Brief" component={Brief}/>
        <Stack.Screen options={{ headerShown: false }}  name="Detail" component={Detail}/>
        <Stack.Screen options={{ headerShown: false }}  name="DoorImage" component={DoorImage}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
