import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {
  useState,
  useRef,
} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DealsScreen from "../screens/DealsScreen";
import HomePage from "../screens/HomePage";
import SingleCard from "../screens/SingleCard";
import SingleDealScreen from "../screens/SingleDealScreen";
import { Picker } from "@react-native-picker/picker";
const Tab =
  createBottomTabNavigator();

const CustomTabBar = (
  props
) => {
  const navigateToHomeScreen =
    () => {
      props.navigation.navigate(
        "home"
      );
    };

  const navigateToDealScreen =
    () => {
      props.navigation.navigate(
        "deal"
      );
    };
  const navigateToAllScreen =
    () => {
      props.navigation.navigate(
        "all"
      );
    };
  const Index =
    props.state.index;

  return (
    <View
      style={
        styles.TabBarMainContainer
      }
    >
      <TouchableOpacity
        onPress={
          navigateToHomeScreen
        }
        activeOpacity={0.6}
        style={{
          alignItems:
            "center",
          backgroundColor:
            "#E21717",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="home"
          size={25}
          color="#FFFFFF"
        />
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={
          navigateToHomeScreen
        }
        activeOpacity={0.6}
        style={{
          alignItems:
            "center",
          backgroundColor:
            Index === 0 ||
            Index === 3
              ? "#FFFFFF"
              : "#E21717",
          paddingHorizontal: 20,
          paddingVertical: 7,
        }}
      >
        <MaterialCommunityIcons
          name="ticket-confirmation"
          size={20}
          color={
            Index === 0 ||
            Index === 3
              ? "#E21717"
              : "#FFFFFF"
          }
        />
        <Text
          style={{
            color:
              Index === 0 ||
              Index === 3
                ? "#E21717"
                : "#FFFFFF",
            fontSize: 16,
          }}
        >
          COUPONS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={
          navigateToDealScreen
        }
        activeOpacity={0.6}
        style={{
          alignItems:
            "center",
          backgroundColor:
            Index === 1 ||
            Index === 4
              ? "#FFFFFF"
              : "#E21717",
          paddingHorizontal: 20,
          paddingVertical: 7,
        }}
      >
        <FontAwesome5
          name="tags"
          size={15}
          color={
            Index === 1 ||
            Index === 4
              ? "#E21717"
              : "#FFFFFF"
          }
        />
        <Text
          style={{
            color:
              Index === 1 ||
              Index === 4
                ? "#E21717"
                : "#FFFFFF",
            fontSize: 16,
            paddingTop: 5,
          }}
        >
          DEALS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // props.inputref.current.togglePicker();
          props.open(),
            console.log(
              "click"
            );
        }}
        activeOpacity={0.6}
        style={{
          alignItems:
            "center",
          justifyContent:
            "center",
          paddingHorizontal: 20,
          paddingVertical: 7,
        }}
      >
        <FontAwesome
          name="sort-amount-desc"
          size={30}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </View>
  );
};

const BottomStackNavigator =
  () => {
    const [sort, setSort] =
      useState();
    const pickerRef =
      useRef();

    function open() {
      pickerRef.current.focus();
    }

    function close() {
      pickerRef.current.blur();
    }

    return (
      <>
        <Tab.Navigator
          tabBar={(props) => (
            <CustomTabBar
              {...props}
              open={open}
            />
          )}
        >
          <Tab.Screen
            name="home"
            children={() => (
              <HomePage
                sort={sort}
              />
            )}
            // HOME PAGE
            options={{
              headerShown: false,
            }}
          />

          <Tab.Screen
            name="deal"
            children={() => (
              <DealsScreen
                sort={sort}
              />
            )}
            // DEAL SCREEN NEED TO CHANGE THE NAME(DealsScreen) ONLY
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="all"
            component={
              HomePage // DEAL SCREEN NEED TO CHANGE THE NAME(AllScreen) ONLY
            }
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="single"
            component={
              SingleCard
            } // HOME PAGE
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="singleDeal"
            component={
              SingleDealScreen
            } // HOME PAGE
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
        <Picker
          ref={pickerRef}
          selectedValue={sort}
          style={{
            display: "none",
          }}
          onValueChange={(
            itemValue,
            itemIndex
          ) =>
            setSort(itemValue)
          }
        >
          <Picker.Item
            label="Sort By High Discount"
            value="discount_desc"
          />
          <Picker.Item
            label="Sort By Low Discount"
            value="discount_asce"
          />
        </Picker>
      </>
    );
  };

const pickerSelectStyles =
  StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 4,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "purple",
      borderRadius: 8,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
const styles =
  StyleSheet.create({
    TabBarMainContainer: {
      justifyContent:
        "space-between",
      alignItems: "stretch",
      paddingHorizontal: 10,
      height: 50,
      flexDirection: "row",
      width: "100%",
      backgroundColor:
        "#E21717",
    },

    button: {
      height: 50,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor:
        "#00BCD4",
      justifyContent:
        "center",
      alignItems: "center",
      flexGrow: 1,
    },

    TextStyle: {
      color: "#fff",
      textAlign: "center",
      fontSize: 20,
    },
  });
export default BottomStackNavigator;
