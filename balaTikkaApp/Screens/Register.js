import React from 'react';
import { View , Text,StyleSheet,Dimensions, TouchableOpacity, TextInput} from 'react-native';
import InputText from "../Components/InputText";
import Button from "../Components/Button";
import FacebookBtn from "../Components/FacebookBtn";
import TwitterButton from "../Components/TwitterButton";
import GoogleButton from "../Components/GoogleButton";

import Icon from 'react-native-vector-icons/Entypo';


let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function Register(props) {
    return (
        <View style={styles.container}>
        <View style={styles.mainView}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                style={styles.btnSignIn}
                onPress={()=>props.navigation.navigate("SignIn")}
                >
                    <Text style={{color:"red"}}>Log In</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignUp}>
                <Text style={{color:"white"}}>Sign Up</Text>

                </TouchableOpacity>
            </View>
            <View style={{
            justifyContent:"center",
            alignItems:"center" ,
            marginTop:height*0.05
            }}>
                <InputText placeholder="Enter email or username" />
                </View>
                <View style={{
            justifyContent:"center",
            alignItems:"center" ,
            marginTop:height*0.01,
            flexDirection:"row"
            }}>
                <InputText placeholder="password" />               
                </View>
                <View style={{
            justifyContent:"center",
            alignItems:"center" ,
            marginTop:height*0.01,
            flexDirection:"row"
            }}>
                <InputText placeholder="confirm password" />               
                </View>
            <View style={{marginTop:height*0.06}}>
               <Button text="Sign Up" onPress={()=>props.navigation.navigate("landingPage")}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center", marginTop:height*0.04}}>
            <FacebookBtn/>
            <TwitterButton/>
            <GoogleButton/>
            </View>
        </View>
     </View>
    );
}

export default Register;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"black"
    },
    mainView:{
        backgroundColor:"white",
        height:500,
        width:"90%",
        alignSelf:"center",
        borderRadius:25
    },
    btnContainer:{
        height:40,
        width:"80%",
        borderWidth:1,
        borderColor:"lightgrey",
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:height*0.04,
        borderRadius:20,
        flexDirection:"row"
},
btnSignUp:{
    height:38,
    width:"55%",
    backgroundColor:"red",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"

},
btnSignIn:{
    width:"45%",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
},
textInput:{
    borderBottomWidth:1,
    borderBottomColor:"lightgrey",
    width:"70%"

},
})