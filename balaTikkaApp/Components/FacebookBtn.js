import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';




function FacebookBtn({onPress}) {
    return (
       <TouchableOpacity style={{height:40,width:40,
       borderRadius:25, borderWidth:1, justifyContent:"center",
        alignItems:"center", borderColor:"lightgrey"
       }}
       onPress={onPress}>
           <Icon name="sc-facebook" size={40} color="#3b5998" />

       </TouchableOpacity>
    );
}

export default FacebookBtn;