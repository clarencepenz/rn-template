/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens

import {
  OnBoarding,
  NewPage
} from './app/screens'

const Stack = createStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="OnBoard" component={OnBoarding} options={{ headerShown: false }}/>
       <Stack.Screen name="NewPage" component={NewPage} options={{ headerShown: false }}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
};


export default  App;
