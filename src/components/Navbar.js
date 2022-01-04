/**
* This is the navbar component
* example of usage:
*   var left = (<Left><Button transparent><Icon name='menu' /></Button></Left>);
*   var right = (<Right><Button transparent><Icon name='menu' /></Button></Right>);
*   <Navbar left={left} right={right} title="My Navbar" />
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Header, Body, Title, Left, Right } from 'native-base';
import { Icon } from 'react-native-elements'
import { View, Text, TouchableOpacity } from 'react-native';
import { lightTheme } from '../theme/colors';
import { font } from '../constants';
// Our custom files and classes import



export default class Navbar extends Component {
  render() {
    const { title, left, right, } = this.props
    return (
      <View style={{
        flexDirection: 'row', marginBottom: 40, paddingHorizontal: 20, shadowColor: 'gray', backgroundColor: lightTheme.WHITE_COLOR, height: 80,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
        paddingTop: 20,
      }}>

        <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 5, }}>


        {left}

        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', flex: 1, paddingRight: 5, }}>
          <Text numberOfLines={1} style={{ fontSize: 20, fontFamily: font.BOLD }}>{title}</Text>
        </View>


      </View>
    );
  }
}

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  title: {
    marginTop: 2,
    marginBottom: 2,
    marginRight: 20,
    marginLeft: 20,
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: font.BOLD
  },
};

