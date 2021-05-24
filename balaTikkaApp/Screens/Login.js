import React from 'react';
import { View , Text,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import InputText from "../Components/InputText";
import Button from "../Components/Button";
import FacebookBtn from "../Components/FacebookBtn";
import TwitterButton from "../Components/TwitterButton";
import GoogleButton from "../Components/GoogleButton";



let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function Login(props) {
    return (
       <View style={styles.container}>
          <View style={styles.mainView}>
              <View style={styles.btnContainer}>
                  <TouchableOpacity
                  style={styles.btnSignIn}
                  >
                      <Text style={{color:"white"}}>Log In</Text>

                  </TouchableOpacity>
                  <TouchableOpacity 
                   style={styles.btnSignUp}
                   onPress={()=>props.navigation.navigate("signUp")}
                  >
                  <Text style={{color:"red"}}>Sign Up</Text>

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
                <TouchableOpacity 
                style={{alignSelf:"flex-end", marginRight:width*0.13, marginTop:height*0.02}}
                onPress={()=>alert("Done")}
                >
                    <Text style={{color:"grey"}}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={{marginTop:height*0.05}}>
               <Button text="Sign In" onPress={()=>props.navigation.navigate("landingPage")} />
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

export default Login;
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
btnSignIn:{
    height:38,
    width:"55%",
    backgroundColor:"red",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"

},
btnSignUp:{
    width:"45%",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
}
})