import React from 'react';
import { TextInput ,StyleSheet} from "react-native";

function InputText({placeholder}) {
    return (
        <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        />
    );
}

export default InputText;
const styles = StyleSheet.create({
    textInput:{
        borderBottomWidth:1,
        borderBottomColor:"lightgrey",
        width:"70%"
    
    }
})