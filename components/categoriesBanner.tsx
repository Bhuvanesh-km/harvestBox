import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const categories = [
  {
    name: "Fruits",
    image:
      "https://media.istockphoto.com/id/1273378551/photo/set-of-summer-fruits-and-berries-in-wooden-serving.jpg?s=1024x1024&w=is&k=20&c=6cuBvrVdGYtybOk7XQnagg_JPBLzxAnk6vSgxZaHbYE=",
  },
  {
    name: "Vegetables",
    image:
      "https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=mb1EBDCszi7HP1FxgCPNTh3N1IgV03_N4rCnO_AtStc=",
  },
  {
    name: "Dairy",
    image:
      "https://media.istockphoto.com/id/911727186/photo/dairy-products-such-as-milk-cheese-egg-yogurt-and-butter.jpg?s=1024x1024&w=is&k=20&c=nHbtzpEpDwiSjrrn4e99icmEThi50xwnEggsTQkzERg=",
  },
  {
    name: "Bakery",
    image: "https://source.unsplash.com/1600x900/?bakery",
  },
  {
    name: "Meat",
    image: "https://source.unsplash.com/1600x900/?meat",
  },
  {
    name: "Seafood",
    image: "https://source.unsplash.com/1600x900/?seafood",
  },
];

const CategoriesBanner = () => {
  return (
    <View className="py-5 gap-3">
      <View className="flex flex-row items-center justify-between px-4">
        <Text className="text-gray-700 font-JakartaBold text-xl">
          Categories
        </Text>
        <TouchableOpacity onPress={() => router.replace("/(root)/categories")}>
          <Text className="text-[#93C22F] font-JakartaMedium text-sm">
            View All
            <AntDesign
              name="right"
              size={12}
              color="#93C22F"
              className="ml-2"
            />
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View className="flex flex-col items-center mx-2">
            <View className="rounded-full bg-gray-200 p-1">
              <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-full"
              />
            </View>
            <Text className="text-gray-700 font-JakartaMedium text-sm mt-2">
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesBanner;
