import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Cli,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
const Cardsm = ({
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
}) => {
  const copyToClipboard = (
    couponCode
  ) => {
    Clipboard.setString(
      couponCode
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor:
          "#FFFFFF",
        margin: 10,
        borderRadius: 10,
        //marginLeft:-17,
        paddingVertical: 15,
      }}
    >
      <View
        style={{
          flexDirection:"row",
          justifyContent:"space-evenly",
          alignItems: "center",
         
        }}
      >
        <View
          style={{                   //SHOW THE COUPON  DETAILS 15% 
            marginLeft:-5,
            borderColor:"red",             
            borderRadius: 10,
            borderStyle:"dashed",
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              backgroundColor:
                "red",
              color: "white",
              fontWeight:
                "bold",
              paddingVertical: 10,
              paddingHorizontal: 20,
              textAlign:"center",
              borderColor:"#fff",
              fontSize: 35,
            }}
          >
            {discount}
          </Text>
        </View>
        <Text               //2ND PAGE  1ST PART   michaels coupon
          style={{
            fontSize: 26,
            width: "60%",
            marginLeft: 15,
            fontWeight:
              "bold",
            color: "black",
          }}
          //{coupon_title}  line 98-100 if you have to remove  from API
        >
          Michael's Coupons
          
        </Text>
      </View>
      <Text
        style={{
          paddingVertical: 10,
          //textAlign: "center",
          marginLeft:-2,
          fontSize:21

        }}
        //{descp} // line 113
      >
        {coupon_title}
        
      </Text>
      <View
        style={{
          flexDirection:
            "row",
          alignItems:
            "center",
          justifyContent:
            "space-around",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            textTransform:
              "uppercase",
            backgroundColor:"#F3F3F3",        // coupon background color code 
            paddingVertical: 10,
            paddingHorizontal: 55,
            marginLeft:-10,
            borderWidth: 2,
            fontSize: 25,
            borderRadius: 2,
            borderStyle:"dashed",
          }}
        >
          {code}
        </Text>
        <Entypo
          name="scissors"
          size={30}
          style={{
            position:
              "absolute",
            bottom: -10,
          }}
        />

        <View>
          <TouchableOpacity
            onPress={() =>
              copyToClipboard(
                code
              )
            }
            style={{
              backgroundColor:
                "red",
              paddingHorizontal: 10,
              paddingVertical: 5,
              flexDirection:
                "row",
              justifyContent:
                "center",
                borderRadius:15,
            }}
          >
            <Text
              style={{
                color:
                  "white",
                fontSize: 14,
                fontWeight:
                  "bold",
                marginRight: 3,
              }}
            >
              COPY CODE{" "}
            </Text>
            <MaterialIcons
              name="content-copy"
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>
          <TouchableOpacity     //View coupon code function
            style={{
              backgroundColor:
                "red",
              paddingHorizontal: 10,
              flexDirection:
                "row",
              justifyContent:
                "center",
              alignItems:
                "center",
              marginTop: 5,
              borderRadius:15,
            }}
          >
            <Text
              style={{
                color:
                  "white",
                fontSize: 14,
                fontWeight:
                  "bold",
                paddingVertical: 5,
                marginRight: 5,
              }}
            >
              SHOP NOW 
            </Text>
            <Entypo
              name="shopping-cart"
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View                               // Bar code design
        style={{
          width: "120%",
          alignItems:"flex-start",
        }}
      >
        <Image
          style={{
            height: 90,
            width: 428,
            resizeMode: 'contain',
            flex: .5,
            aspectRatio: 4.2,
            marginBottom:13,
          }}
          source={require("../assets/bar.png")}
        />
      </View>
      <View                                 //100% SuCCESS
        style={{
          flexDirection:"row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "112%",
          borderTopWidth:1,
//        borderBottomWidth:1,
          borderColor:"#C5C5C5",
          paddingVertical: 2,
          paddingHorizontal: 10,
          position:"absolute",
          bottom: 0,
          borderRadius: 10,
         // Color:"#333"
        }}
      >
        <Text                         // LIKE BUTTON 100% SUCCESS
          style={{
            fontWeight:
              "bold",
            color: "#333333",
          }}
        >
          100% SUCCESS
        </Text>
        <AntDesign
          name="like2"
          color="#269926"
          size={25}
        />
        <Text
          style={{
            fontWeight:
              "bold",
          }}
        >
          |
        </Text>
        <Text
          style={{
            fontWeight:
              "bold",
              color: "#333333",
          }}
        >
          USED TODAY    98
        </Text>
        <MaterialCommunityIcons
          name="network-strength-3"
          size={20}
          color={"black"}
        />
      </View>
    </View>
  );
};

export default Cardsm;
