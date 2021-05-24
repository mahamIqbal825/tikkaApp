import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/EvilIcons';
import GIcon from 'react-native-vector-icons/SimpleLineIcons';
import PIcon from 'react-native-vector-icons/Ionicons';




let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;


function DelivaryAddress(props) {
    return (
       <View style={styles.container}>
           <LinearGradient sstart={{x: 1, y: 1}} end={{x: 1, y: 1}}  colors={['white','#A9A9A9']}
           style={styles.container}>
               <Icon name="pluscircleo" size={30} color="green" style={{alignSelf:"flex-end", marginTop:height*0.02, marginRight:width*0.05}} />
               <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:30, marginTop:height*0.03}}>Delivary Address</Text>
 <View style={{marginTop:height*0.06}}>
     <View style={{flexDirection:"row", alignItems:"center", marginTop:height*-0.01,
      borderWidth:2,borderColor:"grey",alignSelf:"center",borderRadius:17, backgroundColor:"white",
      height:80, width:"90%"}}>
          <View style={{marginLeft:width*0.04, width:"70%"}}>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Steet#1,House#7086,Banni</Text>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Rawalpindi</Text>
          </View>
          <View style={{width:"30%", alignItems:"center", justifyContent:"center"}}>
          <Icon name="delete" size={25} color="red" />
          </View>
     </View>
     <View style={{flexDirection:"row", alignItems:"center", marginTop:height*0.02,
      borderWidth:2,borderColor:"grey",alignSelf:"center",borderRadius:17, backgroundColor:"white",
      height:80, width:"90%"}}>
          <View style={{marginLeft:width*0.04, width:"70%"}}>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Steet#1,House#7086,Banni</Text>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Rawalpindi</Text>
          </View>
          <View style={{width:"30%", alignItems:"center", justifyContent:"center"}}>
          <Icon name="delete" size={25} color="red" />
          </View>
     </View>
     <View style={{flexDirection:"row", alignItems:"center", marginTop:height*0.02,
      borderWidth:2,borderColor:"grey",alignSelf:"center",borderRadius:17, backgroundColor:"white",
      height:80, width:"90%"}}>
          <View style={{marginLeft:width*0.04, width:"70%"}}>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Steet#1,House#7086,Banni</Text>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Rawalpindi</Text>
          </View>
          <View style={{width:"30%", alignItems:"center", justifyContent:"center"}}>
          <Icon name="delete" size={25} color="red" />
          </View>
     </View>
     <View style={{flexDirection:"row", alignItems:"center",marginTop:height*0.02,
      borderWidth:2,borderColor:"grey",alignSelf:"center",borderRadius:17, backgroundColor:"white",
      height:80, width:"90%"}}>
          <View style={{marginLeft:width*0.04, width:"70%"}}>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Steet#1,House#7086,Banni</Text>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Rawalpindi</Text>
          </View>
          <View style={{width:"30%", alignItems:"center", justifyContent:"center"}}>
          <Icon name="delete" size={25} color="red" />
          </View>
     </View>
     <View style={{flexDirection:"row", alignItems:"center",marginTop:height*0.02,
      borderWidth:2,borderColor:"grey",alignSelf:"center",borderRadius:17, backgroundColor:"white",
      height:80, width:"90%"}}>
          <View style={{marginLeft:width*0.04, width:"70%"}}>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Steet#1,House#7086,Banni</Text>
          <Text style={{ fontSize:18, fontWeight:"bold"}}>Rawalpindi</Text>
          </View>
          <View style={{width:"30%", alignItems:"center", justifyContent:"center"}}>
          <Icon name="delete" size={25} color="red" />
          </View>
     </View>
 </View>
 <View style={{flexDirection:"row", alignItems:"center", marginTop:height*0.07}}> 
 <View style={{borderRightWidth:1,borderRightColor:"black", width:"10%",alignItems:"center", justifyContent:"center"}}>
<FIcon name="sc-facebook" size={43} color="black" />
</View>
<View style={{borderRightWidth:1,borderRightColor:"black", width:"12%",alignItems:"center", justifyContent:"center"}}>
<Icon name="instagram" size={35} color="black" />
</View>
<View style={{ width:"12%",alignItems:"center", justifyContent:"center"}}>
<GIcon name="globe" size={35} color="black" />
</View>
<TouchableOpacity style={{flexDirection:"row", borderRadius:12 ,backgroundColor:"red", height:40,width:80, alignItems:"center", justifyContent:"center", marginLeft:width*0.4}}>
<PIcon name="call" size={20} color="white" />
<Text style={{color:"white", fontWeight:"bold", fontSize:18, padding:9}}>Call</Text>
</TouchableOpacity>
</View>
</LinearGradient>
           
       </View>
    );
}

export default DelivaryAddress;
const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:"lightgrey"
    }
})