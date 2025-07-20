import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { Activity } from "@/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

type Props = {
  items: Activity[];
};

const Activities: React.FC<Props> = ({ items }) => {
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);
  return (
    <ScrollView
      style={{
        paddingHorizontal: Spacing * 2,
        paddingVertical: Spacing * 3,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((activity) => (
        <TouchableOpacity
          onPress={() => setActiveActivity(activity)}
          style={{
            height: 60,
            width: 60,
            backgroundColor:
              activeActivity?.id === activity.id
                ? Colors.background
                : Colors.white,
            borderRadius: Spacing,
            marginRight: Spacing * 2,
            alignItems: "center",
            justifyContent: "center",
          }}
          key={activity.id}
        >
          <MaterialCommunityIcons
            name={activity.icon}
            size={30}
            color={
              activeActivity?.id === activity.id ? Colors.tint : Colors.text
            }
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Activities;
