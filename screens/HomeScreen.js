import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePage from "./HomePage";
import SingleCard from "./SingleCard";


const Stack =
  createStackNavigator();

function MyStack(
) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown:false
        }}
      />
      <Stack.Screen
        name="single"
        component={SingleCard}
        options={{headerShown:false
        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
