import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Animated,
    Easing
} from 'react-native';
import * as images from '../../assets/images'
import { buttonStyles } from '../../theme/ButtonStyle';
import { font } from '../../constants';
import { lightTheme } from '../../theme/colors';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            latitude: 6.5244,
            longitude: 3.3792,
            type:'non'
        };
    }

    async componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 7000,
            easing: Easing.linear,
        }).start();
    }


    onItemSelect(incoming_type){
     const {type} = this.state
      if (type == 'owner' & incoming_type == 'owner') {
        this.setState({type : "non"})
      } else if (type != 'owner' & incoming_type == 'owner') {
        this.setState({type : "owner"})
      } else if (type == 'manager' & incoming_type == 'manager') {
        this.setState({type : "non"})
      } else if (type != 'manager' & incoming_type == 'manager') {
        this.setState({type : "manager"})
      }
      else if (type == 'tenant' & incoming_type == 'tenant') {
        this.setState({type : "non"})
      } else if (type != 'tenant' & incoming_type == 'tenant') {
        this.setState({type : "tenant"})
      }

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: lightTheme.WHITE_COLOR, }}>
            <StatusBar barStyle="dark-content" backgroundColor={lightTheme.WHITE_COLOR} translucent hidden={false} />

            <View style={{height:60}} />
            <View style={{ marginTop: 20 }}>
              <View style={styles.header}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 15,
                  marginLeft: 15,
                }}>
                
                  <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1, paddingRight: 5 }}>
                    <Text numberOfLines={1} style={styles.title}>Sign Up as </Text>
                    <Text numberOfLines={1} style={styles.sub_text}>What kind of user best describes you</Text>
                  </View>
                 
                </View>
              </View>
            </View>

            <View style={{ flex: 1,  }}>
             
                <TouchableOpacity onPress={() => this.onItemSelect("owner")} style={[styles.menu_container_default,  this.state.type == "owner" ?{backgroundColor: lightTheme.PRIMARY_COLOR} : {backgroundColor:'#E8F8FC'}]}>
                  <View style={[{ margin: 2, padding:13, borderRadius:40, backgroundColor:'#12B8DD20' }, this.state.type == "owner" ? {backgroundColor:lightTheme.WHITE_COLOR}:{}]}>
                    <Icon
                      active
                      name="staro"
                      type='antdesign'
                      size={40}
                      color={lightTheme.PRIMARY_COLOR}
                    />
                  </View>
                  <View style={{flex:1,alignItems:'flex-start', marginLeft:12 }}>
                  <Text numberOfLines={2} style={[styles.menu_text_default, this.state.type == "owner" ? {color:lightTheme.WHITE_COLOR}:{}]}>Property owner </Text>
                  <Text numberOfLines={2} style={[styles.menu_sub_text_default, this.state.type == "owner" ? {color:lightTheme.WHITE_COLOR}:{}]}>Add and manage your properties, tenants and managers</Text>
                  </View>
                  {
                    this.state.type == "owner" ?
                      <View style={styles.check_button}>
                        <Icon
                          active
                          name="check"
                          type='font-awesome'
                          size={10}
                          color={lightTheme.WHITE_COLOR}
                        />
                      </View>
                      :
                      null
                  }
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.onItemSelect("manager")} style={[styles.menu_container_default,  this.state.type == "manager" ?{backgroundColor: lightTheme.PRIMARY_COLOR} : {backgroundColor:'#E8F8FC'}]}>
                  <View style={[{ margin: 2, padding:13, borderRadius:40, backgroundColor:'#12B8DD20' }, this.state.type == "manager" ? {backgroundColor:lightTheme.WHITE_COLOR}:{}]}>
                    <Icon
                      active
                      name="setting"
                      type='antdesign'
                      size={40}
                      color={lightTheme.PRIMARY_COLOR}
                    />
                  </View>
                  <View style={{flex:1,alignItems:'flex-start', marginLeft:12 }}>
                  <Text numberOfLines={2} style={[styles.menu_text_default, this.state.type == "manager" ? {color:lightTheme.WHITE_COLOR}:{}]}>Property Manager </Text>
                  <Text numberOfLines={2} style={[styles.menu_sub_text_default, this.state.type == "manager" ? {color:lightTheme.WHITE_COLOR}:{}]}>Stay updated with the activities of  the properties and tenants under your care </Text>
                  </View>
                  {
                    this.state.type == "manager" ?
                      <View style={styles.check_button}>
                        <Icon
                          active
                          name="check"
                          type='font-awesome'
                          size={10}
                          color={lightTheme.WHITE_COLOR}
                        />
                      </View>
                      :
                      null
                  }
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.onItemSelect("tenant")} style={[styles.menu_container_default,  this.state.type == "tenant" ?{backgroundColor: lightTheme.PRIMARY_COLOR} : {backgroundColor:'#E8F8FC'}]}>
                  <View style={[{ margin: 2, padding:13, borderRadius:40, backgroundColor:'#12B8DD20' }, this.state.type == "tenant" ? {backgroundColor:lightTheme.WHITE_COLOR}:{}]}>
                    <Icon
                      active
                      name="user-o"
                      type='font-awesome'
                      size={38}
                      color={lightTheme.PRIMARY_COLOR}
                    />
                  </View>
                  <View style={{flex:1,alignItems:'flex-start', marginLeft:12 }}>
                  <Text numberOfLines={2} style={[styles.menu_text_default, this.state.type == "tenant" ? {color:lightTheme.WHITE_COLOR}:{}]}>Tenant</Text>
                  <Text numberOfLines={2} style={[styles.menu_sub_text_default, this.state.type == "tenant" ? {color:lightTheme.WHITE_COLOR}:{}]}>Make payments and complaints about your housing with a few clicks </Text>
                  </View>
                  {
                    this.state.type == "tenant" ?
                      <View style={styles.check_button}>
                        <Icon
                          active
                          name="check"
                          type='font-awesome'
                          size={10}
                          color={lightTheme.WHITE_COLOR}
                        />
                      </View>
                      :
                      null
                  }
                </TouchableOpacity>
           
            </View>


            <View style={{ backgroundColor: lightTheme.WHITE_COLOR, marginBottom: 20 }}>
              <View style={styles.footer}>
                <View style={{
                  marginRight: 15,
                  marginLeft: 15,
                }}>

                  <View style={[this.state.type != "non" ? {}:{opacity:0.3}]}>
                    <TouchableOpacity onPress={() => this.state.type != "non" ? handleAuthorize('identityserver') : null} style={[buttonStyles.primaryButtonStyle, this.state.type != "non" ? {borderColor: lightTheme.SECONDARY_COLOR,}:{}  ]}>
                      <Text style={[buttonStyles.primaryButtonTextStyle]}>Next</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>
          </View>
        );
    }
}


const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000099',
  },
  welcome_text: {
    color: lightTheme.WHITE_COLOR,
    fontSize: 40,
    marginHorizontal: 25,
    textAlign: 'center',
    fontFamily: font.SEMI_BOLD,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  footer: {
    height: 70,
  },
  title: {
    marginTop: 2,
    marginBottom: 2,
    marginRight: 20,
    marginLeft: 20,
    fontSize: 22,
    color: lightTheme.PRIMARY_TEXT_COLOR,
    fontFamily: font.EXTRA_BOLD
  },
  sub_text: {
    color: lightTheme.SECONDARY_TEXT_COLOR,
    fontSize: 13,
    marginHorizontal: 25,
    textAlign: 'center',
    fontFamily:font.REGULAR
  },
  menu_container_default: {
    flexDirection: "row",
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
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
    fontSize: 17,
    color: lightTheme.PRIMARY_COLOR,
    fontFamily: font.BOLD,
    marginBottom: 5
  },
  menu_sub_text_default: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 13,
    color: lightTheme.SECONDARY_TEXT_COLOR,
    fontFamily: font.REGULAR,
    marginBottom: 5
  },
  check_button: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderColor: lightTheme.WHITE_COLOR,
    position: 'absolute',
    right: 10,
    top: 10,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
});