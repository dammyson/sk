import React, { Component } from 'react';
import { View, StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Card, Icon, SocialIcon } from 'react-native-elements'
import Home from './Home';
import { lightTheme } from '../../theme/colors';

const Tab = createBottomTabNavigator();


class AppNavigator extends Component {

  render() {
    return (
      <>
       <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return (
                <View style={{ marginTop:5}}>
                  <Icon
                    active
                    focused={focused}
                    name="home"
                    type='foundation'
                    color={color}
                  />
                </View>
              );
            } 
            else if (route.name == 'Property') {
              return (
              <View style={{  marginTop:5}}>
                <Icon
                  active
                  focused={focused}
                  name="home"
                  type='material'
                  color={color}
                />
              </View>
                );
            }
            

            else if (route.name == 'Account') {
              return (
              <View style={{  marginTop:5}}>
                <Icon
                  active
                  focused={focused}
                  name="user"
                  type='font-awesome'
                  color={color}
                />
              </View>
                );
            }
          },
        })}
        tabBarOptions={{
          initialRoute: 'Home',
          activeTintColor: lightTheme.PRIMARY_COLOR, //'tomato',
          inactiveTintColor: '#AEB1BE',
          height:40
        }}
      >
           <Tab.Screen name="Home" component={Home} />
        <Tab.Screen navigation={this.props.navigation} name="Property" component={Home}/>

        <Tab.Screen navigation={this.props.navigation} name="Account" component={Home}/>
     
       


      </Tab.Navigator>
      </>

    );
  }

}

export default AppNavigator;