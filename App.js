import * as React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen'
import IssLocationScreen from './screens/ISSlocationScreen'
import MeteorScreen from './screens/MeteorScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack';

const Stack= createStackNavigator()
export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="homeScreen"
          screenOptions={{headerShown:false}}>
          <Stack.Screen name="homeScreen" component={HomeScreen}/>
          <Stack.Screen name="ISSlocationScreen" component={IssLocationScreen}/>
          <Stack.Screen name="MeteorScreen" component={MeteorScreen}/>
        </Stack.Navigator>       
      </NavigationContainer>
    )
  }
}


