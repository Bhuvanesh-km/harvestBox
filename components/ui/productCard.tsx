import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  thumbnail,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <View className="flex-1 relative rounded-lg m-2 border border-gray-200">
      <Image
        source={{ uri: thumbnail }}
        className="w-full h-36 object-cover rounded-t-lg"
      />
      <Text className="text-center">{title}</Text>
      <View className="flex-row justify-center p-2">
        <Text className="font-bold text-lg">${price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setIsFavourite(!isFavourite)}
        className={`absolute top-1 right-1 p-1 items-center justify-center rounded-full w-5 h-5 
        ${isFavourite ? "bg-red-500" : "bg-gray-500"}
        `}
      >
        <AntDesign name="heart" size={10} color="white" />
      </TouchableOpacity>
      <TouchableOpacity className=" bg-green-500 p-1 gap-1 m-2 flex-row items-center justify-center rounded-lg">
        <AntDesign name="shoppingcart" size={20} color="white" />
        <Text className="text-white">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
