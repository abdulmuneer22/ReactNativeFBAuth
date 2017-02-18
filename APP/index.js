import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

class APP extends Component{

  _handleLogin(){
    LoginManager.logInWithReadPermissions(['public_profile'])
    .then((result)=>{
      if(result.isCancelled){
        alert("Unable to sign in , Sign In Cancelled by user");
      }else{
        alert('Login success with permissions:' + result.grantedPermissions.toString())
      }
    })
  }


  render(){
    return(
      <View style={Style.wrapper}>
      <TouchableOpacity
      onPress={()=>{this._handleLogin()}}
      >
      <Text>
      Login to facebook
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  wrapper : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'

  }
});

export default APP
