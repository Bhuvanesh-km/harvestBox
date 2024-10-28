import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const featuresProducts = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Cls30uVAjNB0B_xKbBC2Yu5aM4AB5fGmW7rqLphx3b0=",
    price: 100,
    discount: 10,
  },
  {
    id: 2,
    name: "Carrot",
    image:
      "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=AZlR713OB95BftaWVrKHOLKcbX1VYSWBHfGs1C6_nj8=",
    price: 200,
    discount: 20,
  },
  {
    id: 3,
    name: "Organic Fruits",
    image: "https://via.placeholder.com/150",
    price: 300,
    discount: 30,
  },
];

const FeaturedBanner = () => {
  return (
    <View className="py-5 gap-3">
      <View className="flex flex-row items-center justify-between px-4">
        <Text className="text-gray-700 font-JakartaBold text-xl">
          Featured Products
        </Text>
        <TouchableOpacity>
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
        data={featuresProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex flex-col items-center mx-2">
            <View className="rounded-lg bg-gray-200">
              <Image
                source={{ uri: item.image }}
                className="w-24 h-24 rounded-lg"
              />
            </View>
            <Text className="text-gray-700 font-JakartaBold text-sm mt-2">
              {item.name}
            </Text>
            <View className="flex flex-row items-center">
              <Text className="text-gray-700 font-JakartaBold text-sm">
                <FontAwesome name="rupee" size={14} color="black" />
                {item.price}
              </Text>
              <Text className="text-gray-500 font-JakartaRegular text-sm ml-2 line-through">
                <FontAwesome name="rupee" size={14} color="black" />
                {item.price + item.discount}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FeaturedBanner;
