import { AntDesign } from "@expo/vector-icons";
import { AdMobBanner } from "expo-ads-admob";
import React, {
  useState,
} from "react";
import {
  Image,
  Text,
  View,
} from "react-native";

const DescriptionCard = ({
  id,
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
}) => {
  // const Items = [
  //   // 2ND PAGE BOTTOM DESCRIPTION PART
  //   "Discount Valid On regular Price items",
  //   "Fabrics beads,frames,t-shirts, cicuit machines,pillows,throws, etc.",
  //   "Apply Michaels promo code at checkout to get flat off.",
  // ];
  // bannerError(e) ;{
  //   alert(e);
  // };
  const [show, setShow] =
    useState(false);
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor:
          "#FFFFFF",
        margin: 10,
        borderRadius: 10,
        paddingVertical: 30,
      }}
    >
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 24,
          marginTop: -28,
          paddingVertical: 10,
        }}
      >
        Description
      </Text>
      <Text>
        {" "}
        {String(
          descp
        ).substring(0, 50)}
        {"  "}
      </Text>
      {show ? (
        <Text>
          {" "}
          {String(
            descp
          ).substring(50)}
          {"  "}
        </Text>
      ) : null}
      {/* {Items.map(
        (data, index) => (
          <Text
            key={index}
          >{`\u2022 ${data}`}</Text>
        )
      )} */}
      <Text
        onPress={() =>
          setShow(
            (prev) => !prev
          )
        }
        style={{
          textAlign: "right",
          color: "red",
          paddingVertical: 15,
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 50,
        }}
      >
        {show
          ? "+show less"
          : "+Show more"}
      </Text>
      <View
        style={{
          flexDirection:
            "row",
          alignItems:
            "center",
          marginBottom: 70,
        }}
      >
        <Text
          style={{
            fontWeight:
              "bold",
            fontSize: 18,
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
            color: "#4ac1d4",
            fontSize: 20,
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
            color: "#4ac1d4", // no button second page
            fontSize: 20,
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
            color: "#FFFFFF",
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
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />
      </View>

      <View
        style={{
          flexDirection:
            "row",
          justifyContent:
            "space-around",
          alignItems:
            "center",
          width: "112%",
          backgroundColor:
            "#120E43",
          paddingVertical: 5,
          paddingHorizontal: 5,
          position:
            "absolute",
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
          Verified{"  "}
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
          {"  "}
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
  );
};

export default DescriptionCard;
