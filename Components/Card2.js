import React, {
  useState,
} from "react";
import {
  AdMobInterstitial
} from "expo-ads-admob";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { GetDateString } from "../helper";

const adUnitID =
  Platform.select({
    // https://developers.google.com/admob/ios/test-ads
    ios: "ca-app-pub-3940256099942544/2934735716",
    // https://developers.google.com/admob/android/test-ads
    android:
      "ca-app-pub-3940256099942544/1033173712",
  });

const showInterstital =
  async () => {
    AdMobInterstitial.setAdUnitID(
      "ca-app-pub-3940256099942544/1033173712"
    ); // Test ID, Replace with your-admob-unit-id
    // for iops AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/2934735716');
    try {
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    } catch (e) {
      console.log(e);
    }
  };


const Card2 = ({
  item,
  navigation,
}) => {
  const {
    id,
    category,
    coupon_title,
    discount,
    expires,
    code,
    url,
    sucess,
    coupon_today,
    button_text,
    page_text,
    image,
    descp,
    status,
    create_date,
    appid,
  } = item;
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        TAKE AN EXTRA
      </Text>

      <View
        style={{
          flexDirection:
            "row",
          alignItems:
            "center",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor:"#FFC700",
            marginTop:8, 
            marginLeft: 40,
          }}
        />
        <Text
          // 20%OFF
          style={
            styles.discount
          }
        >
          {discount}
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor:"#FFC700",
            marginTop:8,  
            marginRight: 40,
          }}
        />
      </View>

      <Text
        style={
          styles.description
        }
      >
        {coupon_title} 
      </Text>
      <View
        style={{
          flexDirection:
            "row",
          paddingVertical: 3,
        }}
      >
        <Text
          style={styles.btn}
          //onPress={()=>navigation.navigate('single',{id},)}
          onPress={() => {
            // showInterstital();
            navigation.navigate(
              "singleDeal",
              { id }
            );
          }}
          onPress={() => {
            //showInterstital();
            navigation.navigate(
              "singleDeal",
              { id }
            );
          }}
        >
          SHOW THE DEAL
        </Text>
      </View>
      <Text
        style={styles.expire}
      >
        Expires:{" "}
        {GetDateString(
          new Date(expires)
        )}
      </Text>
      <View
        style={
          styles.bottom_container
        }
      >
        <View
          style={
            styles.bottom_content
          }
        >
          <Text
            style={{
              fontWeight:
                "bold",
                color:"#333",
              marginRight: 12,
              //marginTop:5
              
            }}
          >
            {sucess
              ? "100% SUCCESS"
              : "0% SUCCESS"}
          </Text>
          <AntDesign
            name="like2"
            color="#269926"
            size={18}
          />
        </View>
        <View
          style={
            styles.image_container
          }
        >
          <Text
            style={{
              fontWeight:
                "bold",
              alignItems:
                "stretch",
            }}
          >
            USED TODAY   {" "}
            {coupon_today}
            <MaterialCommunityIcons
              name="network-strength-3"
              size={20}
              color={"black"}
            />
          </Text>

          <View
            style={
              styles.image
            }
          >
            <Image
              source={require("../assets/share.png")}
              style={{
                width: 30,
                height: 25,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles =
  StyleSheet.create({
    container: {           
       // SINGLE CARD BACKGROUND COLOR
      alignItems: "center",
      shadowColor: "#E5E5E5",
      backgroundColor:
        "#fffFFF",
      marginBottom: 10,
      elevation: 7,
      paddingTop: 10,
      shadowColor: "#52006A",
    },
    item: {
      backgroundColor: "#fff",
      shadowColor: "#E5E5E5",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      textTransform:
        "uppercase",
      fontSize: 18, // TAKE AN EXTRA 1st page
      //fontWeight: "bold",
    },
    discount: {
      textTransform:
        "uppercase",
      fontSize: 40, // 20 % OFF FONST SIZE OR STYLE
      color: "#E41F26",
      fontWeight: "bold",
      // fontFamily: "Mulish", // Font style have to change
      marginHorizontal: 10,
      marginTop:-5,
    },
    description: {
      // DISCOUNT ON NEW COUPONS
      //width:"70%",
      marginTop:-5,
      marginBottom:10,
      marginLeft:15,
      alignContent:"center",
      textTransform:"uppercase",
      fontSize: 17,
      paddingVertical: 2,
      //fontWeight:"bold"
    },
    btn: {
      //SHOW THE DEAL
      paddingBottom:5,
      paddingTop:5,
      textTransform:
        "uppercase",
      fontSize: 20,
      fontWeight:"700",
      backgroundColor:
        "#E41F26",
      color: "white",
      textAlignVertical:
        "center",
      paddingHorizontal: 35,
       alignItems:"center",
       borderRadius:7,
      // borderTopLeftRadius: 7,
      // borderBottomLeftRadius: 7,
      paddingVertical: 10,
    },
    coupon: {
      // SHOW COUPAN CODE TEXT BUTTON KLE
      textTransform:
        "uppercase",
      fontSize: 20,
      textAlignVertical:
        "center",
      borderWidth: 2,
      borderRadius: 1,
      borderStyle: "dashed",
      borderColor: "#000",
      backgroundColor:
        "#FFFFFF",
      fontWeight: "bold",
      paddingHorizontal: 10,
    },
    expire: {
      // EXPIRES 1st
      textTransform:
        "uppercase",
      fontSize: 16,
      paddingBottom: 2,
      //fontWeight: "bold",
    },
    // container:{
    //   flex:1,
    //   backgroundColor:"lightgrey",
    //   alignItems:"center",
    //   justifyContent:"center"

    // } ,
    bottom_container: {
      // 1st page bottom 100% SUCCESS
      paddingTop:3,
      paddingBottom:3,
      flexDirection: "row",
      justifyContent:
        "space-between",
      width: "100%",
      //   backgroundColor:
      //     "lightgrey",
      borderWidth: 1,
      borderColor: "#C5C5C5",
      alignItems: "center",
      borderTopColor: "#C5C5C5",
      marginTop: 10,
    },
    bottom_content: { 
      flexDirection: "row",
      alignItems: "center",
      width: "45%",
      justifyContent:
        "center",
      borderRightColor:
        "black",
      borderRightWidth: 1,
    },
    image_container: {
      flexDirection: "row",
      alignItems: "center",
      width: "50%",
      justifyContent:
        "space-between",
    },
    image: {
      fontWeight: "bold",
      backgroundColor:"#E41F26",
      borderTopLeftRadius: 7,
      color: "#fff",
      paddingHorizontal: 15,
      paddingVertical: 7,
      position: "absolute",
      right: 0,
      bottom: -3,
    },
  });

export default Card2;
