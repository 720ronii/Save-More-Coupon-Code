import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  AdMobBanner,
} from 'expo-ads-admob';
import * as Clipboard from "expo-clipboard";
import React, {
  useEffect,
  useState,
} from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { API_URL } from "../helper";
const SingleDealScreen = (
  props
) => {
  const copyToClipboard = (
    couponCode
  ) => {
    Clipboard.setString(
      couponCode
    );
  };
  const Items = [
    "Fabrics beads,frames,t-shirts, cicuit machines,pillows,throws, etc.", // 2ND PAGE BOTTOM DESCRIPTION PART
    "Apply Michaels promo code at checkout to get flat off.",
  ];
  const [data, setData] =
    useState({
      id: 44,
      category: "All",
      coupon_title:
        "Michael'S Coupan",
      discount: "20%",
      expires: "2018-06-18",
      code: "3SPARKLE",
      url: "https://www.google.com/",
      sucess: true,
      coupon_today: 41,
      button_text:
        "SHOW COUPON CODE",
      page_text:
        "Visit Offer Page",
      image:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      descp:
        "Discount valid on regular priced items",
      status: "F",
      create_date:
        "2018-06-12 10:21:26",
      appid: 11,
    });
  const id =
    props?.route?.params?.id;
  useEffect(() => {
    const getCouponById =
      async () => {
        const response =
          await fetch(
            `${API_URL}?id=${id}`
          );
        const result =
          await response.json();
        setData(result);
      };
    getCouponById();
  }, [id]);
  const {
    category,
    coupon_title,
    discount,
    expires,
    container,
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
  } = data;
  useEffect(() => {
    // here you need to call APi
    // API response
    // setData()
  }, [id]);
  return (
    <ScrollView
      style={{ flex: 1 }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor:
            "#FFFFFF",
          margin: 10,
          borderRadius: 10,
          //marginLeft:-5,
          paddingVertical: 10,
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
            style={{
              borderColor:"red",
              borderRadius: 1,
              borderStyle: "dashed",
              borderWidth: 3,
              marginLeft:-8
            }}
          >
            <Text
              style={{
                backgroundColor:
                  "red",
                color:
                  "white",
                fontWeight:
                  "bold",
                paddingVertical: 10,
                paddingHorizontal: 22,
                borderColor:
                  "red",
                fontSize: 30,
              }}
            >
              {discount}
            </Text>
          </View>
          <Text //2ND PAGE  1ST PART
            style={{
              fontSize: 26,
              width: "60%",
              marginLeft: 25,
              fontWeight:
                "bold",
              color: "black",
            }}
            //{coupon_title}  can replace with line 158-160
          >
            Michael's Coupons
          </Text>
        </View>
        <Text
          style={{
            
            paddingVertical: 10,
            textAlign: "left",
            marginLeft:-5,
            fontSize:21
          }}
        >
          {coupon_title}
        </Text>
        <View
          style={{                   // GRAB DEAL STYLE AREA
            flexDirection: "row",
            justifyContent:"space-around",
            width: "100%",
            alignItems:"center",
            marginLeft:-2,
            marginBottom: 10,
            borderWidth: 2,
            borderRadius: 1,
            borderColor: "#E21717",
            borderStyle: "dashed",
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              backgroundColor:"#F3F3F3",       // coupon background color code
              paddingVertical: 15,
              paddingHorizontal: 45,
              fontSize: 25,
            }}
          >
            {code}
          </Text>
          <Entypo
            name="scissors"
            size={25}
            style={{
              position:"absolute",
              bottom: -14,
              left:0
            }}
          />

          <TouchableOpacity
            onPress={() => {
              copyToClipboard(
                code
              );
              Linking.openURL(
                "http://google.com"          // CHANGE THE ADDRESS OF MICHAELS
              );
            }}
          >
            <Text
              style={{
                // width:151,
                // height:60,
                textTransform:"uppercase",
                backgroundColor: "#E21717",
                fontWeight:"bold",
                color:"#FFFFFF",
                paddingVertical: 17,
                paddingHorizontal: 30,
                fontSize: 22,
                //marginLeft:5
                
              }}
            >
              GRAB DEAL
            </Text>
          </TouchableOpacity>
        </View>
        <View // Bar code design
          style={{
            width: "100%",
            alignItems:
              "center",
            marginTop: 5,
            marginBottom: 25,
          }}
        >
          <Image
            style={{
              height: 90,
              width: 428,
              resizeMode:
                "contain",
              flex: 0.5,
              aspectRatio: 4.2,
            }}
            source={require("../assets/bar.png")}
          />
        </View>
        <View //100% SuCCESS
          style={{
            flexDirection:
              "row",
            justifyContent:
              "space-around",
            alignItems:
              "center",
            width: "112%",
            borderTopWidth: 1,
            //            borderBottomWidth:1,
            borderColor:
              "#C5C5C5",
            paddingVertical: 2,
            paddingHorizontal: 10,
            position:
              "absolute",
            bottom: 0,
            borderRadius: 10,
          }}
        >
          <Text // LIKE BUTTON 100% SUCCESS
            style={{
              fontWeight:
                "bold",
              color: "#333",
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
              fontWeight:"bold",
              color: "#333",
            }}
          >
            USED TODAY 98
          </Text>
          <MaterialCommunityIcons
            name="network-strength-3"
            size={20}
            color={"black"}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor:
            "#FFFFFF",
          margin: 10,
          borderRadius: 10,
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight:
              "bold",
            fontSize: 20,
            paddingBottom: 10,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            marginBottom: 5,
          }}
        >
          {descp}
          {"  "}
        </Text>
        <View
          style={{
            marginLeft: 15,
          }}
        >
          {Items.map(
            (data, index) => (
              <Text
                key={index}
                style={{
                  paddingBottom: 5,
                }}
              >{`\u2022 ${data}`}</Text>
            )
          )}
        </View>
        <Text
          style={{
            textAlign:"right",
            color: "red",
            paddingVertical: 10,
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          +Show more
        </Text>
        <View
          style={{
            flexDirection:
              "row",
            alignItems:
              "center",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontWeight:
                "bold",
              fontSize: 16,
              marginRight: 10,
            }}
          >
            Is this Coupon
            working ?
          </Text>
          <Text
            style={{
              // IS THIS COUPON WORKING
              backgroundColor:
                "#FFFFFF",
              color:
                "#4ac1d4",
              fontSize: 18,
              fontWeight:
                "bold",
              marginRight: 10,
              paddingVertical: 5,
              paddingHorizontal: 12,
              borderRadius: 10,
              elevation: 5,
              shadowColor:
                "#52006A",
            }}
          >
            Yes
          </Text>
          <Text
            style={{
              backgroundColor:
                "#FFFFFF",
              color:
                "#4ac1d4", // no button second page
              fontSize: 18,
              fontWeight:
                "bold",
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 10,
              elevation: 5,
              shadowColor:
                "#52006A",
            }}
          >
            No
          </Text>
        </View>
        <View
          style={{
            flexDirection:
              "row",
            justifyContent:
              "center",
            marginBottom: 25,
            alignItems:
              "center",
          }}
        >
          <Text
            onPress={() => {}}
            style={{
              backgroundColor:
                "#E21717", // goto MICHALES STORE
              paddingHorizontal: 20,
              paddingVertical: 5,
              color:
                "#FFFFFF",
              fontSize: 18,
              borderRadius: 15,
              textAlign:
                "center",
            }}
          >
            GO TO Michal Store{" "}
            <AntDesign
              name="arrowright"
              size={20}
              color="#FFFFFF"
            />
          </Text>
        </View>
        <View style={{
        flex:1,
        width:"100%",
        backgroundColor:"lightgrey",
        alignItems:"center",
        marginTop:20,
        borderRadius:5,
        marginBottom:15
      }}>
        <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        />
      </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            backgroundColor:
              "lightgrey",
            alignItems:
              "center",

            borderRadius: 5,
          }}
        >
          {}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent:"space-around",
            alignItems:"center",
            width: "112%",
            backgroundColor: "#120E43",
            paddingVertical: 5,
            paddingHorizontal: 5,
            position:"absolute",
            bottom: 0,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight:
                "bold",
              color: "white",
            }}
          >
            Verified
            <Text
              style={{
                backgroundColor:
                  "green",
                width: 20,
                height: 20,
              }}
            >
              <Image
                source={require("../assets/check.png")}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </Text>
          </Text>
          <Text
            style={{
              color: "white",
              marginLeft: 20,
            }}
          >
            |
          </Text>
          <Text
            style={{
              fontWeight:
                "bold",
              color: "white",
            }}
          >
            Valid Till{" "}
            {new Date(expires)
              .toDateString()
              .slice(3)}
            <Image
              source={require("../assets/clock.png")}
              style={{
                width: 15,
                height: 15,
              }}
            />
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleDealScreen;
