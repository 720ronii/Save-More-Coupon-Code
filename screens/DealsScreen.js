import React, {
  useState,
  useEffect,
} from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Card2 from "../components/Card2";
import { API_URL } from "../helper";

const DealsScreen = ({
  navigation,
}) => {
  const [
    Loading,
    setLoading,
  ] = useState(false);
  const [data, setData] =
    useState([
      {
        id: 44,
        category: "All",
        coupon_title:
          "DISCOUNT ON NEW ARRIVALS",
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
      },
    ]);

  let appId = 3;
  const getCoupons =
    async () => {
      try {
        const response =
          await fetch(
            `${API_URL}?appId=${appId}`
          );
        const result =
          await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        Alert.alert(
          "Error",
          "Some Eror Occure Please try after some time"
        );
        setLoading(false);
      }
    };
  useEffect(() => {
    setLoading(true);
    getCoupons();
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={(props) => (
        <Card2
          {...props}
          navigation={
            navigation
          }
        />
      )}
      keyExtractor={(item) =>
        item.id
      }
      refreshing={Loading}
      onRefresh={getCoupons}
    />
  );
};

export default DealsScreen;
