import React from "react";
import { StyleSheet, Text, View ,Button} from 'react-native';
import {DrawerNavigationItem} from "react-navigation-drawer";
import { Ionicons,createIconSet  } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native-web";

export default Slidebar = props=>{
    <ScrollView>
        <ImageBackground source={require("../assets/michaelslogo.jpg")}
        style={{width:undefined,padding:16,paddingTop:48}}
        >
            <image source={require("../assets/michaelslogo.jpg")} style={Styles.Profile}/>
        </ImageBackground>

    </ScrollView>
};
const Styles=StyleSheet.create({
    container:{
        flex:1
    },
    Profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:"#fff"
    }
});
