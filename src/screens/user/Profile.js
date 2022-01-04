import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import * as images from '../../assets/images';
import { baseUrl, getToken, processResponse, showTopNotification, storeUser, getUser, getLogout } from '../../utilities';
import { Icon } from 'react-native-elements'
import { lightTheme } from '../../theme/colors';
import { font } from '../../constants';
import ActivityIndicator from '../../components/ActivityIndicator';
export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: {},

    };
  }

  async componentDidMount() {
    this.setState({
      user: JSON.parse(await getUser())
    })
  }



  async getProfile() {
    console.warn(baseUrl() + '/idp/profile/oidc/userinfo')
    this.setState({ loading: true, })
    fetch(baseUrl() + '/idp/profile/oidc/userinfo', {
      method: 'GET', headers: {

        'Authorization': 'Bearer ' + await getToken(),
      }
    })
      .then(processResponse)
      .then(res => {
        this.setState({ loading: false })
        const { statusCode, data } = res

        if (statusCode == 200) {
          storeUser(JSON.stringify(data))
          this.setState({
            user: data
          })
        } else {
          this.setState({ loading: false })
          showTopNotification("danger", res.data.message, 3)

        }
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.warn(error)
        showTopNotification("danger", error.message, 4)
      });


  }

  render() {
    const { user } = this.state
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>

            <ImageBackground
              source={images.banner}
              style={{ flex: 1 }}
              resizeMode="cover"
            >
            </ImageBackground>
          </View>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> {user.family_name} {user.given_name} </Text>
              <Text style={styles.info}>{user.email} ({user.uisedu_uin}) </Text>
              <Text style={styles.description}>,</Text>

              <View style={{ flex: 1 }}>

              </View>
              <TouchableOpacity onPress={() => this.getLogoutRequest()} style={styles.buttonContainer}>
                <Text style={{ color: "#FFFFFF", }}>Logout </Text>
                <Icon
                  active
                  name="logout"
                  type='antdesign'
                  size={20}
                  color={lightTheme.WHITE_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        { this.state.loading? <ActivityIndicator /> : null}
      </>
    );
  }



  async getLogoutRequest() {
    this.setState({ loading: true, })
    console.warn(baseUrl() + '/idp/profile/Logout');
    fetch(baseUrl() + '/idp/profile/Logout', {
      method: 'GET', headers: {
        'Authorization': 'Bearer ' + await getToken(),
      }
    })
      .then(res => res.text())
      .then(res => {
      
        console.warn(res)
        this.logout()
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.warn(error)
        showTopNotification("danger", error.message, 4)
      });


  }


  logout() {
    getLogout()
    //this.setState({ loading: false })
    setTimeout(() => {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Welcome' }],
      });
    }, 1000);

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: lightTheme.PRIMARY_COLOR,
    fontFamily: font.SEMI_BOLD,
  },
  body: {
    flex: 1,
    marginTop: 40,

  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 1
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
