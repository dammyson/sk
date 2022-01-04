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
const { height, width } = Dimensions.get("screen");


export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            latitude: 6.5244,
            longitude: 3.3792,
        };
    }

    async componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 7000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <ImageBackground
                source={images.welcome}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{}}>
                            <Image
                                source={images.white}
                                style={{ height: 100, width: 100 }}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <Animatable.View
                        style={[styles.footer, {

                        }]}
                        animation="fadeInUpBig"
                    >
                        <View style={[styles.footer, {}]} animation="fadeInUpBig">
                            <View style={{ marginBottom: 30 }}>
                                <Text style={[styles.welcome_text]}>MAKE TODAY YOUR DAY</Text>
                                <Text style={[styles.title_text]}>
                                    There has never been a better time to invest in yourself.
                                    Take the first step. Start your education
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>  this.props.navigation.navigate('Auth')}
                                    style={styles.primaryButtonStyle}>
                                    <Text style={[styles.primaryButtonTextStyle]}>
                                        Proceed
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Animatable.View>
                </View>


            </ImageBackground>
        );
    }
}



const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000099'
    },
    welcome_text: {
        color: lightTheme.WHITE_COLOR,
        fontSize: 47,
        marginHorizontal: 25,
        textAlign: 'center',
        fontFamily: font.SEMI_BOLD
    },
    title_text: {
        color: lightTheme.WHITE_COLOR,
        fontSize: 17,
        marginHorizontal: 25,
        textAlign: 'center'
    },
    logo: {
        width: 250,
        height: 80,
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    primaryButtonStyle: {
        height: 65,
        padding: 12,
        borderRadius: 30,
        marginHorizontal:20,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: lightTheme.PRIMARY_COLOR,
        borderColor: lightTheme.WHITE_COLOR,
        borderWidth:2
      },
      primaryButtonTextStyle: {
        fontFamily:font.BOLD,
        fontSize:14,
        color:lightTheme.WHITE_COLOR

      },

});