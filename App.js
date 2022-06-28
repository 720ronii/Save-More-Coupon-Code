import {
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import {
  Image,
  Linking,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomStackNavigator from "./navigation/BottomStackNavigator";
import AboutScreen from "./screens/AboutScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import RatingScreen from "./screens/RatingScreen";
import ShareScreen from "./screens/ShareScreen";
import TermsConditionScreen from "./screens/TermsConditionScreen";
import { LinearGradient } from "expo-linear-gradient";

//FINAL APP
const Drawer =
  createDrawerNavigator();
const CustomDrawer = (
  props
) => {
  return (
    <DrawerContentScrollView
      {...props}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "#E21717",
          "transparent",
        ]}
        style={
          styles.container
        }
      >
        <Image
          source={require("./assets/michaelslogo.png")}
          style={{
            width: 200,
            height: 160,
          }}
        />
      </LinearGradient>

      <DrawerItemList
        {...props}
      />
      <TouchableOpacity
        onPress={async () => {
          const result =
            await Share.share(
              {
                message:
                  "https://hashcoupons.com/",
                title:
                  "Share Our Website",
                url: "https://hashcoupons.com/",
              }
            );
        }}
        style={{
          marginVertical: 20,
        }}
        activeOpacity={0.6}
      >
        <View
          style={{
            flexDirection:
              "row",
            fontWeight:
              "bold",
            color: "white",
            width: "100%",
            paddingLeft: 20,
            paddingHorizontal: 30,
          }}
          onpr
        >
          <MaterialIcons
            name="share"
            size={20}
            color="#E21717"
          />
          <Text
            style={{
              paddingLeft: 35,
              color: "grey",
              fontSize: 16,
            }}
          >
            Share us
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          const result =
            await Linking.openURL(
              "https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN&gl=US"
            );
        }}
        style={{
          marginVertical: 20,
        }}
        activeOpacity={0.6}
      >
        <View
          style={{
            flexDirection:
              "row",
            fontWeight:
              "bold",
            color: "white",
            width: "100%",
            paddingLeft: 20,
            paddingHorizontal: 30,
          }}
          onpr
        >
          <MaterialIcons
            name="star-rate"
            size={20}
            color="#E21717"
          />
          <Text
            style={{
              paddingLeft: 35,
              color: "grey",
              fontSize: 16,
            }}
          >
            Rate US
          </Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator =
  () => {
    return (
      <Drawer.Navigator
        drawerContent={(
          props
        ) => (
          <CustomDrawer
            {...props}
          />
        )}
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Michael's Coupons"
          component={
            BottomStackNavigator
          }
          options={{
            drawerIcon: ({
              focused,
            }) => (
              <MaterialIcons
                name="home"
                size={20}
                color="#E21717"
              />
            ),
            headerStyle: {
              backgroundColor:
                "#E21717",
            },
            headerTintColor:
              "white",
            headerTitleAlign:
              "center",
            headerTitleStyle:
              {
                fontWeight:
                  "bold",
                color:
                  "white",
              },
            headerRight:
              () => (
                <TouchableOpacity
                  onPress={async () => {
                    const result =
                      await Share.share(
                        {
                          message:
                            "https://hashcoupons.com/",
                          title:
                            "Share Our Website",
                          url: "https://hashcoupons.com/",
                        }
                      );
                  }}
                  activeOpacity={
                    0.6
                  }
                >
                  <View
                    style={{
                      paddingHorizontal: 6,
                      paddingVertical: 5,
                      marginRight: 8,
                      borderWidth: 2, //border radius of share button header
                      borderColor:
                        "#E21717",
                      borderRadius: 50,
                    }}
                  >
                    <AntDesign
                      name="sharealt"
                      size={
                        20
                      }
                      color="white"
                    />
                  </View>
                </TouchableOpacity>
              ),
          }}
        />

        <Drawer.Screen
          name="About US"
          component={
            AboutScreen
          }
          options={{
            drawerIcon: ({
              focused,
            }) => (
              <MaterialIcons
                name="info"
                size={20}
                color="#E21717"
              />
            ),
            headerStyle: {
              backgroundColor:
                "#E21717",
            },
            headerTintColor:
              "white",
            headerTitleStyle:
              {
                fontWeight:
                  "bold",
                color:
                  "white",
              },
          }}
        />
        <Drawer.Screen
          name="Privacy Policy"
          component={
            PrivacyScreen
          }
          options={{
            drawerIcon: ({
              focused,
            }) => (
              <MaterialIcons
                name="lock"
                size={20}
                color="#E21717"
              />
            ),
            headerStyle: {
              backgroundColor:
                "#E21717",
            },
            headerTintColor:
              "white",
            headerTitleStyle:
              {
                fontWeight:
                  "bold",
                color:
                  "white",
              },
          }}
        />
        <Drawer.Screen
          name="Terms-Condition"
          component={
            TermsConditionScreen
          }
          options={{
            drawerIcon: ({
              focused,
            }) => (
              <Ionicons
                name="document"
                size={20}
                color="#E21717"
              />
            ),
            headerStyle: {
              backgroundColor:
                "#E21717",
            },
            headerTintColor:
              "white",
            headerTitleStyle:
              {
                fontWeight:
                  "bold",
                color:
                  "white",
              },
          }}
        />
      </Drawer.Navigator>
    );
  };
const styles =
  StyleSheet.create({
    container: {
      // flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "center",
      paddingVertical: 50,
    },
  });
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
