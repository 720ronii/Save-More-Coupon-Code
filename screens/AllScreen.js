

import React from "react";
import {
  Button,
  View,Text
} from "react-native";

const AllScreen = ({
  navigation,
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent:
          "center",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
        }}
      >
        All
      </Text>
      <Button
        onPress={() =>
          navigation.goBack()
        }
        title="Go back home"
      />
    </View>
  );
};

export default AllScreen;
