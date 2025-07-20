import { RIGHT_CONTAINER_WIDTH } from "@/constants";
import { Destination, Trip as TripType } from "@/data";
import React from "react";
import { ScrollView, View } from "react-native";
import Trip from "./Trip";

type Props = {
  trips: TripType[];
  destination: Destination;
};
const Trips: React.FC<Props> = ({ trips, destination }) => {
  return (
    <View
      style={{
        width: RIGHT_CONTAINER_WIDTH,
        height: "100%",
      }}
    >
      <ScrollView
        style={{
          height: "100%",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {trips.map((trip) => (
          <Trip
            key={trip.id}
            data={{
              ...trip,
              destination_title: destination.title,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Trips;
