import { TRIP_ITEM_WIDTH } from "@/constants";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { Trip as TripType } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  data: TripType & { destination_title: string };
};

const Trip: React.FC<Props> = ({
  data: { id, image, title, destination_id, distance, destination_title },
}) => {
  return (
    <TouchableOpacity
      style={{
        width: TRIP_ITEM_WIDTH,
        borderRadius: Spacing * 2,
        overflow: "hidden",
        marginRight: Spacing * 2,
      }}
      key={id}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={image}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.large,
              color: Colors.tint,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: FontSize.medium,
              color: Colors.tint,
              fontFamily: Font["poppins-regular"],
            }}
          >
            {destination_title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.background,
            padding: Spacing * 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: Colors.tint,
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.medium,
            }}
          >
            Distance to {distance} km
          </Text>
          <Ionicons
            name="arrow-forward"
            color={Colors.text}
            size={FontSize.large}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Trip;
