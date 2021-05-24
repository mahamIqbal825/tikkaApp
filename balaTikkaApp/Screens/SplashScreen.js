import React,{useEffect} from 'react';
import {Image, StyleSheet, Text, Dimensions, View, ImageBackground} from 'react-native';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

function SplashScreen({navigation}) {
    useEffect(() => {
        // Move to Login/Home Screen After 3 secs of Splash
        setTimeout(async () => {
         navigation.replace("SignIn")
        }, 3000);
      }, []);
    return (
       <ImageBackground
       style={{height:"100%",width:"100%"}}
       resizeMode="cover"
       source={require("../assets/splash.jpeg")}
       />
    );
}

export default SplashScreen;