import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";

export type Trip = {
  id: number;
  title: string;
  reviews: number;
  difficult: number;
  distance: number;
  elevation: number;
  description: string;
  image: ImageSourcePropType;
  destination_id: number;
};

export const trips: Trip[] = [
  {
    id: 1,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/ali-kazal-_-qrKQjM_Zw-unsplash.jpg"),
    destination_id: 1,
  },
  {
    id: 2,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/maximilien-t-scharner-FD0Ga_KJTwM-unsplash Medium.jpeg"),
    destination_id: 2,
  },
  {
    id: 3,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/christian-crocker-7ls0DhnAJvw-unsplash.jpg"),
    destination_id: 3,
  },
  {
    id: 4,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/ali-kazal-_-qrKQjM_Zw-unsplash.jpg"),
    destination_id: 4,
  },
  {
    id: 5,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/jack-ward-rknrvCrfS1k-unsplash Medium.jpeg"),
    destination_id: 1,
  },
  {
    id: 6,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/christian-crocker-lPOLUU9tvw4-unsplash.jpg"),
    destination_id: 2,
  },
  {
    id: 7,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/jairph-1XLyzi17Z2M-unsplash Medium.jpeg"),
    destination_id: 3,
  },
  {
    id: 8,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/till-rottmann-uUjGZ0yej4A-unsplash.jpg"),
    destination_id: 4,
  },
  {
    id: 9,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/gabriel-tovar-7n4mXMr9US4-unsplash.jpg"),
    destination_id: 1,
  },
  {
    id: 10,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/christian-crocker-lPOLUU9tvw4-unsplash.jpg"),
    destination_id: 2,
  },
  {
    id: 11,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/christian-crocker-7ls0DhnAJvw-unsplash.jpg"),
    destination_id: 3,
  },
  {
    id: 12,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/till-rottmann-uUjGZ0yej4A-unsplash.jpg"),
    destination_id: 4,
  },
  {
    id: 13,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/gabriel-tovar-7n4mXMr9US4-unsplash.jpg"),
    destination_id: 5,
  },
  {
    id: 14,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/jack-ward-rknrvCrfS1k-unsplash Medium.jpeg"),
    destination_id: 5,
  },
  {
    id: 15,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/christian-crocker-7ls0DhnAJvw-unsplash.jpg"),
    destination_id: 6,
  },
  {
    id: 16,
    title: "Landmannalaugar",
    reviews: 4.2,
    difficult: 0.7,
    distance: 24,
    elevation: 1000,
    description:
      "Landmannalaugar is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking.",
    image: require("@/assets/images/trips/fabio-comparelli-uq2E2V4LhCY-unsplash Medium.jpeg"),
    destination_id: 6,
  },
];

export type Destination = {
  id: number;
  title: string;
};

export const destinations: Destination[] = [
  { id: 1, title: "Iceland" },
  { id: 2, title: "Norway" },
  { id: 3, title: "Sweden" },
  { id: 4, title: "Finland" },
  { id: 5, title: "Denmark" },
  { id: 6, title: "Greenland" },
];

export type Activity = {
  id: number;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "Camping",
    icon: "tent",
  },
  {
    id: 2,
    title: "Kayak",
    icon: "kayaking",
  },
  {
    id: 3,
    title: "Hiking",
    icon: "hiking",
  },
  {
    id: 4,
    title: "Fire",
    icon: "campfire",
  },
  {
    id: 6,
    title: "Eating",
    icon: "hamburger",
  },
];
