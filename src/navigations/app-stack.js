import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
 import AuthStack from './auth-stack';
import Splash from '../screens/onBoarding/Splash';
import Welcome from '../screens/onBoarding/Welcome';
import Login from '../screens/user/Login';
import Register from '../screens/user/Register';
import OTPVerification from '../screens/user/OTPVerification';
import Verified from '../screens/user/Verified';
import CreateCode from '../screens/user/CreateCode';
import VerifyCode from '../screens/user/VerifyCode';
import Completed from '../screens/user/Completed';
import Home from '../screens/home/TabsNavigation';
import Notification from '../components/Notification';
import Property from '../screens/home/Property';





//console.disableYellowBox = true;

class AppStack extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <Root>
        <NavigationContainer >
      
          <Stack.Navigator
          screenOptions={{ 
              gestureEnabled: false,
              headerTintColor: 'white',
              headerShown: false,
             }}
             initialRouteName="Auth">

            <Stack.Screen name="Splash" component={Splash}  />
            <Stack.Screen name="Welcome" component={Welcome}  />
            <Stack.Screen name="Auth" component={Property}  /> 
            
          
          </Stack.Navigator>
        </NavigationContainer>
        </Root>
      );
  }

}
export default AppStack;