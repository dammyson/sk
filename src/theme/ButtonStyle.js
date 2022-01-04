import {lightTheme} from './colors';
import {StyleSheet} from 'react-native';
import {font} from '../constants';
export const buttonStyles = StyleSheet.create({
    primaryButtonStyle: {
      height: 45,
      padding: 12,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: lightTheme.PRIMARY_COLOR,

    },
    primaryButtonTextStyle: {
        fontFamily:font.BOLD,
        fontSize:14,
        color:lightTheme.WHITE_COLOR

      },


      secondaryButtonStyle: {
        height: 45,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#F0F6FA",
  
      },
      secondaryButtonTextStyle: {
          fontFamily:font.BOLD,
          fontSize:14,
          color:lightTheme.WHITE_COLOR
  
        },
    
     
   
  });