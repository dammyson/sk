import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";


export const baseUrl = () => {
  return 'https://uismtshibidp.uis.edu';
};


export const getConfig = () => {
  const configs = {
    identityserver: {
      warmAndPrefetchChrome: true,
      issuer: 'https://uismtshibidp.uis.edu',
      clientId: '_5d3ecde590491b788648a873342e937h',
      redirectUrl: 'edu.uis.its:/oauthredirect',
      additionalParameters: {},
      additionalHeaders: { 'Accept': 'application/json' },
      scopes: ['openid', 'profile', 'getpic', 'email','phone', 'offline_access'],
    },
   
  };
  
  return configs
};



export const storeToken = async (selectedValue) => {
  try {
    await AsyncStorage.setItem('token', selectedValue);
  } catch (error) {
  }
}

export const storeUser = async (selectedValue) => {
  try {
    await AsyncStorage.setItem('user', selectedValue);
  } catch (error) {
  }
}


export const getToken = async () => {
  let token = await AsyncStorage.getItem('token')
  return token
};


export const getUser = async () => {
  let user = await AsyncStorage.getItem('user')
  return  user
};

export const processResponse = (response) =>  {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}

export const showTopNotification = (type, message, duration = 2)=> {
  showMessage({
    message: message,
    type: type,
    duration: duration*1000,
    icon: type 
  });
}

export const getLogout = () => {
  try {
    AsyncStorage.clear()
    return true;
  }
  catch (exception) {
    return false;
  }
};





