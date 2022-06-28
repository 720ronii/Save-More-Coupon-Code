
import React from "react";
import {
  Button,
  Text,
  View,
} from "react-native";

const TermsConditionScreen =
  ({ navigation }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems:
            "center",
          justifyContent:
            "center",
        }}
      >
        <Text>
          Page Not Found{" "}
          {"\n"}The requested
          URL was not found on
          this Server.{"\n"}
          Additionally, a 404
          Not Found error was
          Encountered While
          Trying to use an
          Error Document to
          Handle the request.
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

export default TermsConditionScreen;
