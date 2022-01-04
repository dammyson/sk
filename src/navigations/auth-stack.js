import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/user/Login';
import Profile from '../screens/user/Profile';





//console.disableYellowBox = true;

class AuthStack extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
          <Stack.Navigator
          screenOptions={{ 
              gestureEnabled: false,
              headerTintColor: 'white',
              headerShown: false,
             }}
             initialRouteName="Login">

            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="Profile" component={Profile}  />
           
          </Stack.Navigator>
      );
  }

}
export default AuthStack;