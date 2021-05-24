import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from "react-native";

function Button({text,onPress}) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        >
        <Text style={{color:"white"}}>
            {text}
        </Text>
    </TouchableOpacity>
    );
}

export default Button;
const styles = StyleSheet.create({
    button:{
        height:50,
        width:"60%",
        backgroundColor:"red",
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    }
})