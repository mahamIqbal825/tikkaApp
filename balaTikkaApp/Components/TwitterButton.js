import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

let width = Dimensions.get('window').width;

function TwitterButton({onPress}) {
    return (
        <TouchableOpacity style={{height:40,width:40,
            borderRadius:25, borderWidth:1, justifyContent:"center",
             alignItems:"center", borderColor:"lightgrey", marginLeft:width*0.04
            }}
            onPress={onPress}>
                <Icon name="twitter" size={33} color="#00acee" />
     
            </TouchableOpacity>
    );
}

export default TwitterButton;