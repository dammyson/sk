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
    ScrollView,
    ImageBackground,
} from 'react-native';
import { Icon } from 'react-native-elements'
import ActivityIndicator from '../../components/ActivityIndicator';
import { lightTheme } from '../../theme/colors';
import { font } from '../../constants';
import { buttonStyles } from '../../theme/ButtonStyle';
import * as images from '../../assets/images'
import LinearGradient from 'react-native-linear-gradient';
import Notification from '../../components/Notification';

const defaultAuthState = {
    hasLoggedInOnce: false,
    provider: '',
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: '',
};


export default class Property extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            properties: [1, 6, 7],
            email: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            password: '',
            confirm_password: '',
            notification: false

        };
    }

    render() {

        const type = "student"


        return (

            <>

                <View style={{ flex: 1, backgroundColor: lightTheme.WHITE_COLOR }}>
                    <StatusBar barStyle="dark-content" backgroundColor={lightTheme.WHITE_COLOR} translucent hidden={false} />


                    <View style={{
                        flexDirection: 'row', marginBottom: 40, paddingHorizontal: 20, shadowColor: 'gray', backgroundColor: lightTheme.WHITE_COLOR,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 1,
                        elevation: 8
                    }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flex: 1, paddingRight: 5, marginTop: 40, marginBottom: 20, }}>
                            <Text numberOfLines={1} style={{ fontSize: 18, fontFamily: font.BOLD }}>Properties </Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 5, marginTop: 40, }}>
                        <TouchableOpacity onPress={()=> this.setState({ notification: true })} style={{
                                height: 40, width: 40, borderRadius: 20, shadowColor: 'gray', backgroundColor: lightTheme.WHITE_COLOR,
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.8,
                                shadowRadius: 1,
                                elevation: 8, justifyContent: 'center', alignItems: 'center',
                            }}>

                                <Icon
                                    active
                                    name="md-notifications-outline"
                                    type='ionicon'
                                    size={22}
                                    color={lightTheme.PRIMARY_COLOR}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {this.state.properties.length > 0 ? this.renderProperties() : this.renderEmpty()}

                </View>



                {this.state.notification ? <Notification onClose={() => this.setState({ notification: false })} /> : null}
            </>

        );
    };

    renderProperties() {
        return (
            <View style={{ flex: 1, }}>

                <View style={{ marginHorizontal: 20 }}>
               
                </View>


                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>

                    <View style={{ flex: 1, marginVertical: 5, }}>
                        <Text style={{ color: lightTheme.PRIMARY_TEXT_COLOR, fontFamily: font.BOLD, fontSize: 17 }}>Property Overview</Text>

                    </View>


                    <View style={{ marginVertical: 5, marginLeft: 15, backgroundColor: lightTheme.PRIMARY_COLOR, borderRadius: 5, }}>

                        <Text style={{ color: lightTheme.WHITE_COLOR, fontFamily: font.BOLD, fontSize: 18, margin: 5, marginHorizontal: 10 }}>5</Text>
                    </View>


                </View>



                <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    {this.renderCard(this.state.properties)}
                </ScrollView>

            </View>
        )
    }

    renderEmpty() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', }}>


                <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20, alignItems: 'center', }}>


                    <View style={{ marginBottom: 20 }}>
                        <Image
                            source={images.empty}
                            style={{ height: 100, width: 100 }}
                            resizeMode="cover"
                        />

                        <View style={{
                            position: 'absolute',
                            right: -10,
                            bottom: -15,
                            backgroundColor: '#fff',
                            height: 30, width: 30,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon
                                active
                                name="add-circle"
                                type='ionicon'
                                size={30}
                                color={lightTheme.PRIMARY_COLOR}
                            />
                        </View>
                    </View>



                </View>

                <View style={{ justifyContent: 'flex-start', marginHorizontal: 20, marginTop: 10, alignItems: 'center', }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: lightTheme.SECONDARY_COLOR, fontFamily: font.BOLD }}>Let’s Begin Tracking
                        your properties </Text>
                    <Text numberOfLines={2} style={{ fontSize: 14, textAlign: 'center', marginTop: 10, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: font.REGULAR }}>Add a property so we can begin tracking your properties management   </Text>
                </View>


                <View style={{ justifyContent: 'flex-start', marginHorizontal: 20, marginTop: 10, alignItems: 'center', }}>
                    <Icon
                        active
                        name="arrowdown"
                        type='antdesign'
                        size={30}
                        color={lightTheme.PRIMARY_COLOR}
                    />
                </View>

                <View style={{ marginHorizontal: 20, }}>


                    <View style={{ marginTop: 20 }}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ borderRadius: 5, }}
                            colors={[lightTheme.SECONDARY_COLOR, lightTheme.PRIMARY_COLOR]}>
                            <TouchableOpacity style={[styles.primaryButtonStyle, { marginVertical: 0 }]}>
                                <View style={{}}>
                                    <Icon
                                        active
                                        name="add"
                                        type='material'
                                        size={30}
                                        color={"#fff"}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', }}>
                                    <Text style={[buttonStyles.primaryButtonTextStyle]}>Add Property </Text>
                                </View>
                                <View style={{ width: 30 }} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>

        )
    }



    renderCard(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            const link = data[i].id
            cat.push(
                <TouchableOpacity onPress={() => this.props.navigation.navigate('details', { id: link })} style={{ width: Dimensions.get('window').width / 1.1, height: Dimensions.get('window').width / 1.7, borderRadius: 20, marginHorizontal: 10, }} >
                    <ImageBackground
                        style={{ borderRadius: 12, width: Dimensions.get('window').width / 1.1, height: Dimensions.get('window').width / 1.5, }}
                        source={{ uri: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/c8/35/4f.jpg' }}
                        imageStyle={{ borderRadius: 20, backgroundColor: 'blue' }}

                    >

                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}
                            colors={["#000", "transparent"]}>
                            <View style={{ width: Dimensions.get('window').width / 1.1, height: Dimensions.get('window').width / 1.5, }} >

                                <View style={{ marginTop: 3, marginLeft: 10, marginBottom: 15, alignItems: 'flex-end', paddingHorizontal: 20 }}>
                                    <View style={{ width: 50, height: 50, borderRadius: 40, backgroundColor: lightTheme.SECONDARY_COLOR + "30", marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                        <View style={[{ width: 40, height: 40, margin: 2, padding: 10, borderRadius: 40, backgroundColor: lightTheme.WHITE_COLOR, },]}>
                                            <Icon
                                                active
                                                name="home"
                                                type='antdesign'
                                                size={20}
                                                color={lightTheme.SECONDARY_COLOR}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'flex-end', flex: 1, }} >
                                    <View style={{ paddingTop: 5, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                                        <Text numberOfLines={2} style={{ marginRight: 13, marginTop: 7, marginLeft: 13, fontSize: 15, color: lightTheme.WHITE_COLOR, textAlign: 'left', fontFamily: font.BOLD }}>{"Dibba Al-Fujairah…"}</Text>
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.BOLD }}>{data[i].description}</Text>

                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flex: 1, marginTop: 3, marginLeft: 10, marginBottom: 15 }}>

                                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 11, color: lightTheme.WHITE_COLOR, textAlign: 'left', fontFamily: font.REGULAR }}>Occupied</Text>
                                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 13, color: lightTheme.WHITE_COLOR, textAlign: 'left', fontFamily: font.BOLD }}>75%</Text>
                                            </View>

                                            <View style={{ flex: 1, marginTop: 3, marginLeft: 10, marginBottom: 15 }}>

                                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 11, color: lightTheme.WHITE_COLOR, textAlign: 'left', fontFamily: font.REGULAR }}>Units </Text>
                                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 13, color: lightTheme.WHITE_COLOR, textAlign: 'left', fontFamily: font.BOLD }}>9</Text>
                                            </View>


                                            <View style={{ flex: 1.5, flexDirection: 'row', marginTop: 3, marginLeft: 10, marginBottom: 15 }}>

                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 35, borderRadius: 20, backgroundColor: lightTheme.WHITE_COLOR }} >
                                                    <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 11, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: font.BOLD }}>Apartment  </Text>
                                                </TouchableOpacity>

                                            </View>


                                        </View>

                                    </View>
                                </View>
                            </View>

                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity >
            );
        }
        return cat;
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
    primaryButtonStyle: {
        height: 75,
        padding: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',


    },
});
