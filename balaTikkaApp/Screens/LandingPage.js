import React, {useState} from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import BIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-ratings';
import PIcon from 'react-native-vector-icons/SimpleLineIcons';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function LandingPage(props) {
const[colorOne, setColorOne]=useState("lightgrey");
const[colorTwo, setColorTwo]=useState("lightgrey");
const[colorThree, setColorThree]=useState("lightgrey");

const [bgColorOne,setbgColorOne]=useState("white");
const [bgColorTwo,setbgColorTwo]=useState("white");
const[txtColorOne,setTxtColorOne]=useState("red");
const[txtColorTwo,setTxtColorTwo]=useState("red")


    return (
       <View style={styles.container}>
         <View style={styles.header}>
<Icon name='menu' size={25} color="white" />
<Image
style={{height:45,width:45, marginLeft:width*0.7, borderRadius:25,borderWidth:2, borderColor:"white"}}
source={require("../assets/download.jpeg")}/>
         </View>
         <View style={styles.textContainer}>
<Text style={{color:"white", fontSize:19}}>Choose the</Text>
<Text style={{color:"white", fontWeight:"bold",fontSize:19}}>Food you love</Text>
         </View>
         
             <TextInput
             style={{backgroundColor:"white", width:"90%", alignSelf:"center",
            marginTop:height*0.03, borderRadius:25, padding:10}}
            placeholder="Search for a food item"
             />
             <View style={styles.textContainer}>
<Text style={{color:"white", fontSize:17}}>Category</Text>
         </View>
         <View style={{flexDirection:"row", marginTop:height*0.03, alignSelf:"center"}}>
         
             <TouchableOpacity onPress={()=>{setColorOne("red"),
             setColorTwo("lightgrey"),
            setColorThree("lightgrey")}} style={{height:50, width:90, borderRadius:17,borderWidth:1, borderColor:colorOne,
                backgroundColor:"white",alignItems:"center", justifyContent:"center"}}>
                 <BIcon name="hamburger" size={20} color={colorOne} />
                 <Text style={{color:colorOne}}>Burgers</Text>

             </TouchableOpacity>

             <TouchableOpacity onPress={()=>{setColorTwo("red"),
            setColorOne("lightgrey") , setColorThree("lightgrey")
            }} style={{height:50, width:90, borderRadius:17,marginLeft:width*0.03,borderWidth:1, borderColor:colorTwo,
                backgroundColor:"white",alignItems:"center", justifyContent:"center"}}>
                 <BIcon name="pizza" size={20} color={colorTwo} />
                 <Text style={{color:colorTwo}}>Pizza</Text>
             </TouchableOpacity>
             
             <TouchableOpacity onPress={()=>{setColorThree("red"),
            setColorOne("lightgrey"), setColorTwo("lightgrey") }
            } style={{height:50, width:90, borderRadius:17,marginLeft:width*0.03,borderWidth:1, borderColor:colorThree,
                backgroundColor:"white",alignItems:"center", justifyContent:"center"}}>
                 <BIcon name="pizza" size={20} color={colorThree} />
                 <Text style={{color:colorThree}}>Chicken</Text>
             </TouchableOpacity>
         </View>
         <View style={styles.textContainer}>
<Text style={{color:"white", fontSize:17}}>Burgers</Text>
         </View>

         <View style={{flexDirection:"row", marginTop:height*0.02, marginLeft:width*0.02}}>
             <TouchableOpacity onPress={()=>{setbgColorOne("red"),setbgColorTwo("white"),
            setTxtColorOne("white"), setTxtColorTwo("red")}} style={{backgroundColor:bgColorOne, height:190, width:150, borderRadius:25}}>
                 <Image
                 style={{height:80,width:80, borderRadius:30,alignSelf:"center", marginTop:height*0.02}}
                 source={require("../assets/zinger.jpeg")}
                 />
                 <Text style={{color:txtColorOne, marginTop:height*0.02, fontSize:17, marginLeft:width*0.02}}>
                     Zinger Burger
                 </Text>
               <View style={{marginLeft:width*-0.15, marginTop:height*0.01}}>
                 <Rating
  type='star'
  ratingCount={5}
  imageSize={15}
  //showRating
  
/>
</View>
<Text style={{color:txtColorOne, fontSize:15, marginLeft:width*0.03,marginTop:height*0.01}}>$12</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{setbgColorTwo("red"),setbgColorOne("white"),
            setTxtColorTwo("white"), setTxtColorOne("red")}}  style={{backgroundColor:bgColorTwo, height:190, width:150,marginLeft:width*0.03, borderRadius:25}}>
                 <Image
                 style={{height:90,width:90, borderRadius:30,alignSelf:"center", marginTop:height*0.02}}
                 source={require("../assets/ChickenBurger.png")}
                 resizeMode="contain"
                 />
                 <Text style={{color:txtColorTwo, marginTop:height*0.01, fontSize:17, marginLeft:width*0.02}}>
                     Chicken Burger
                 </Text>
               <View style={{marginLeft:width*-0.15, marginTop:height*0.01}}>
                 <Rating
  type='star'
  ratingCount={5}
  imageSize={15}
  //showRating
  
/>
</View>
<Text style={{color:txtColorTwo, fontSize:15, marginLeft:width*0.03, marginTop:height*0.01}}>$12</Text>
             </TouchableOpacity>

         </View>


            <TouchableOpacity onPress={()=>props.navigation.navigate("addressScreen")}
             style={{backgroundColor:"red", height:55, borderRadius:27, borderWidth:1,
            borderColor:"white",alignItems:"center",justifyContent:"center",
            width:55,alignSelf:"flex-end", marginRight:width*0.09, marginTop:height*0.03}}>
                <PIcon name="handbag" size={25} color="white"  />
                </TouchableOpacity> 

       </View>
    );
}

export default LandingPage;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    header:{
        flexDirection:"row",
        marginLeft:width*0.05,
        marginTop:height*0.04,
        justifyContent:"center",
        alignItems:"center"

    },
    textContainer:{
marginLeft:width*0.05,
marginTop:height*0.04
    }
})