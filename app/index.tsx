import Activities from "@/components/activities";
import Destination from "@/components/destinations";
import Header from "@/components/header";
import Trips from "@/components/trips";
import { CONTAINER_HEIGHT, height, width } from "@/constants";
import Colors from "@/constants/Colors";
import { activities, destinations, trips, Trip as TripType } from "@/data";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";

const Home = () => {
  const [activeTrips, setActiveTrips] = useState<TripType[]>([]);
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  useEffect(() => {
    setActiveTrips(
      trips.filter((t) => t.destination_id === activeDestination.id)
    );
  }, [activeDestination.id]);

  return (
    <>
      <View
        style={{
          height: height,
          backgroundColor: Colors.tint,
          marginTop: height / 2.5,
        }}
      />
      <SafeAreaView
        style={{
          position: "absolute",
          height,
          width,
        }}
      >
        <Header />
        <View
          style={{
            height: CONTAINER_HEIGHT,
            flexDirection: "row",
          }}
        >
          <Destination
            destinations={destinations}
            activeDestination={activeDestination}
            setActiveDestination={setActiveDestination}
          />
          <Trips destination={activeDestination} trips={activeTrips} />
        </View>
        <Activities items={activities} />
      </SafeAreaView>
    </>
  );
};

export default Home;
