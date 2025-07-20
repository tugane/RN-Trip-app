import {
  LEFT_CONTAINER_WIDTH,
  TEXT_ITEM_LENGTH,
  TEXT_ITEM_WIDTH,
} from "@/constants";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { Destination as DestinationType } from "@/data";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Props = {
  destinations: DestinationType[];
  setActiveDestination: React.Dispatch<React.SetStateAction<DestinationType>>;
  activeDestination: DestinationType;
};

const Destination: React.FC<Props> = ({
  destinations,
  setActiveDestination,
  activeDestination,
}) => {
  return (
    <FlatList
      data={destinations}
      style={{
        width: LEFT_CONTAINER_WIDTH,
      }}
      renderItem={({ item }) => (
        <View
          style={{
            height: TEXT_ITEM_LENGTH,
            width: TEXT_ITEM_WIDTH,
          }}
        >
          <TouchableOpacity
            onPress={() => setActiveDestination(item)}
            style={{
              width: TEXT_ITEM_LENGTH,
              transform: [
                {
                  rotate: "-90deg",
                },
                {
                  translateY: -TEXT_ITEM_WIDTH + Spacing,
                },
              ],
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.medium,
                color: Colors.text,
              }}
            >
              {item.title}
            </Text>
            {activeDestination.id === item.id && (
              <View
                style={{
                  height: Spacing / 2,
                  width: Spacing / 2,
                  backgroundColor: Colors.background,
                  borderRadius: "100%",
                  position: "absolute",
                  transform: [
                    {
                      translateY: TEXT_ITEM_WIDTH - Spacing / 2,
                    },
                  ],
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Destination;
