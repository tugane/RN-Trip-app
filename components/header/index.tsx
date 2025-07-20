import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: Spacing * 2 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Ionicons name="menu" color={Colors.lightText} size={28} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: Spacing * 2,
            }}
          >
            <Ionicons name="search" color={Colors.lightText} size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="sliders" color={Colors.lightText} size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginVertical: Spacing * 3,
        }}
      >
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: Colors.tint,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          Ring road trip
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            color: Colors.lightText,
            fontFamily: Font["poppins-regular"],
          }}
        >
          Route 1 Hringvegur
        </Text>
      </View>
    </View>
  );
};

export default Header;
