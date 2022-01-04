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
import { lightTheme } from '../theme/colors';
import { font } from '../constants';
import * as images from '../assets/images'
import Navbar from './Navbar';

const defaultAuthState = {
    hasLoggedInOnce: false,
    provider: '',
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: '',
};


export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            properties: [3, 3],
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


        var left = (
            <TouchableOpacity onPress={() => this.props.onClose()} style={{}}>
                <Icon
                    active
                    name="arrow-back-ios"
                    type='material'
                    size={25}
                    color={lightTheme.PRIMARY_COLOR}
                />
            </TouchableOpacity>
        );


        return (

            <>

                <View style={{ flex: 1, backgroundColor: lightTheme.WHITE_COLOR, position: 'absolute', height: height, width: width }}>
                    <StatusBar barStyle="dark-content" backgroundColor={lightTheme.WHITE_COLOR} translucent hidden={false} />

                    <Navbar left={left} title="Notifications" />
                    {this.state.properties.length > 0 ? this.renderNotifications() : this.renderEmpty()}

                </View>
            </>

        );
    };

    renderNotifications() {
        return (
            <View style={{ flex: 1, }}>


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

                    <Text style={{ fontSize: 20, textAlign: 'center', color: lightTheme.SECONDARY_COLOR, fontFamily: font.BOLD }}>Notification</Text>
                    <Text numberOfLines={2} style={{ fontSize: 14, textAlign: 'center', marginTop: 10, color: lightTheme.SECONDARY_TEXT_COLOR, fontFamily: font.REGULAR }}>No Notication at the moment   </Text>
                </View>

            </View>

        )
    }

    renderCard(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            const link = data[i].id
            cat.push(
                <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 1, marginHorizontal: 10, borderColor: lightTheme.PRIMARY_LIGHT_TEXT_COLOR + "50", borderWidth: 0.5, marginBottom: 2, }} >
                    <View style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin:10
                    }}>
                        <Icon
                            active
                            name="ios-checkmark"
                            type='ionicon'
                            size={30}
                            color={lightTheme.PRIMARY_COLOR}
                        />
                    </View>
                    <View style={{ paddingTop: 5, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, flex:1 }} >
                        <Text numberOfLines={2} style={{ marginRight: 13, marginTop: 7, marginLeft: 13, fontSize: 15, color: lightTheme.PRIMARY_TEXT_COLOR, textAlign: 'left', fontFamily: font.BOLD }}>{"Rent Due "}</Text>
                        <Text numberOfLines={3} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: lightTheme.PRIMARY_LIGHT_TEXT_COLOR, textAlign: 'left', fontFamily: font.REGULAR, marginBottom: 15 }}>{"Tenant in Unit type and number in Property name is due to pay rent for this month "}</Text>
                    </View>
                </TouchableOpacity >
            );
        }
        return cat;
    }
}

const { height, width } = Dimensions.get('screen');
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
