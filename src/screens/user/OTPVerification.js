import React, { useState, Component, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements'
import ActivityIndicator from '../../components/ActivityIndicator';
import { lightTheme } from '../../theme/colors';
import { font } from '../../constants';
import { buttonStyles } from '../../theme/ButtonStyle';
import OTPField from './OTPField';

import {
  Container,
  Content,


} from "native-base";

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};


export default class OTPVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      selected: {},
      email: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      password: '',
      confirm_password: '',

    };
  }

  render() {

    const type = "student"


    return (
      <Container style={styles.background}>
        <Content>
    
            <View style={styles.container}>
              <StatusBar barStyle="dark-content" backgroundColor={lightTheme.WHITE_COLOR} translucent hidden={false} />

              <View style={{ height: 80 }} />
              <View style={{ flex: 1, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 20, alignItems: 'center', }}>


                  <View style={{}}>
                    <Icon
                      active
                      name="arrow-back-ios"
                      type='material'
                      size={25}
                      color={lightTheme.PRIMARY_COLOR}
                    />
                  </View>

                  <Text numberOfLines={1} style={{ fontSize: 20, fontFamily: font.BOLD }}>Verify your account  </Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 20, marginTop: 10, alignItems: 'center', }}>
                  <Text numberOfLines={2} style={{ fontSize: 14, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: font.REGULAR }}>An OTP has been sent to your email, enter it to  verify your account  </Text>
                </View>


                <View style={{ height: 30 }} />
                <View style={{marginHorizontal: 20,}}>
                 
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <OTPField
                      count={6}
                      onComplete={(text) => this.getCode(text)}
                    />
                  </View>

                  <View style={{marginTop:20}}>
                      <TouchableOpacity style={[buttonStyles.primaryButtonStyle, type != "non" ? { borderColor: lightTheme.SECONDARY_COLOR, } : {}]}>
                        <Text style={[buttonStyles.primaryButtonTextStyle]}>Next</Text>
                      </TouchableOpacity>
                    </View>



                 
                </View>
              </View>


              <View style={{ backgroundColor: lightTheme.WHITE_COLOR, marginBottom: 10 }}>
                <View style={styles.footer}>
                  <View style={{
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                                      

                    <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                    <View style={{ height: 2, backgroundColor: lightTheme.PRIMARY_COLOR, flex: 1, marginHorizontal: 2, borderRadius: 3 }} />
                    <View style={{ height: 2, backgroundColor: lightTheme.PRIMARY_COLOR, flex: 1, marginHorizontal: 2, borderRadius: 3 }} />
                    <View style={{ height: 2, backgroundColor: '#EDEDED', flex: 1, marginHorizontal: 2, borderRadius: 3 }} />
                   
                    <View style={{ height: 2, backgroundColor: '#EDEDED', flex: 1, marginHorizontal: 2, borderRadius: 3 }} />
                  </View>
                  </View>
                </View>
              </View>
         
        
      </View>
      </Content>
      </Container>
    );
  };

}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: lightTheme.WHITE_COLOR ,
    height: Dimensions.get("window").height,
  },
  background: {
    flex: 1,
    height: Dimensions.get("window").height,
  
 

  },
  welcome_text: {
    color: lightTheme.WHITE_COLOR,
    fontSize: 40,
    marginHorizontal: 25,
    textAlign: 'center',
    fontFamily: font.SEMI_BOLD,
  },
  title_text: {
    color: lightTheme.WHITE_COLOR,
    fontSize: 17,
    marginHorizontal: 25,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  footer: {

  },
  title: {
    marginTop: 2,
    marginBottom: 2,
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
    color: lightTheme.PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: font.BOLD
  },
  menu_container_default: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 8
  },
  menu_text_default: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 13,
    color: lightTheme.PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: font.EXTRA_BOLD,
    marginBottom: 5
  },
  check_button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#44b9e5',
    position: 'absolute',
    right: -10,
    top: -10,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: lightTheme.PRIMARY_COLOR,
    marginVertical: 5,
    fontSize: 12,
    fontFamily: font.REGULAR,
    backgroundColor: '#eee',
    
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
  },
});
