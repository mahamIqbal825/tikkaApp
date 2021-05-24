import React from 'react';
import { TouchableOpacity, Dimensions , Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
let width = Dimensions.get('window').width;

function GoogleButton({onPress}) {
    return (
        <TouchableOpacity style={{height:40,width:40,
            borderRadius:25, borderWidth:1, justifyContent:"center",
             alignItems:"center", borderColor:"lightgrey", marginLeft:width*0.04
            }}
            onPress={onPress}>
                <Image
                style={{height:30,width:30}}
                source={require("../assets/google-logo.png")}
                />
     
            </TouchableOpacity>
    );
}

export default GoogleButton;