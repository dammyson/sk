import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { getRole } from '../../utilities';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }


  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this.props.navigation.navigate('Welcome');
    }, 4000);
  }




  initPage = async () => {
   let role = await getRole()
    AsyncStorage.getItem('rem').then((value) => {
      if (value == 'login') {
        if(role == 'client'){
          this.props.navigation.replace('App')
      }else{
         
      }
      } else if (value == null) {
        this.props.navigation.navigate('Welcome');
      }
      else {
        this.props.navigation.navigate('Welcome');
      }

    })

  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')} />




      </View>
    );
  }
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 120,
    justifyContent: 'center',
    resizeMode: 'contain'
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
});