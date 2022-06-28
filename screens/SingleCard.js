import React, {
  useEffect,
  useState,
} from "react";
import Cardsm from "../components/Cardsm";
import { View } from "react-native";
import DescriptionCard from "../components/DescriptionCard";
import { ScrollView } from "react-native-gesture-handler";

import { API_URL } from "../helper";

const SingleCard = (
  props
) => {
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
    const getCouponById = async () => {
      const response = await fetch(`${API_URL}?id=${id}`);
      const result = await response.json();
      setData(result)
    }
    getCouponById()
  }, [id]);

  return (
    <ScrollView
      style={{ flex: 1 }}
    >
      <Cardsm {...data} />
      <DescriptionCard
        {...data}
      />
    </ScrollView>
  );
};

export default SingleCard;
