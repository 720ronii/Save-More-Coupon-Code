import React from "react";
import {
  Button,
  Text,
  View,
} from "react-native";

const AboutScreen = ({
  navigation,
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent:
          "center",
        fontWeight: "bold",
      }}
    >
      <Text>
        Page Not Found {"\n"}
        The requested URL was
        not found on this
        Server.{"\n"}
        Additionally, a 404
        Not Found error was
        Encountered While
        Trying to use an Error
        Document to Handle the
        request.
      </Text>
      <Button
        onPress={() =>
          navigation.goBack()
        }
        title="Back to Home"
      />
    </View>
  );
};

export default AboutScreen;
