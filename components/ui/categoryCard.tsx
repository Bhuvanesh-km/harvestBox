import { View, Text, Image } from "react-native";
import React from "react";

interface CategoryCardProps {
  id: number;
  name: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, icon }) => {
  return (
    // render a category card
    <View
      key={id}
      className="flex mx-auto my-2 flex-col items-center justify-center rounded-lg p-4 bg-white border-black border w-[150px] h-[150px]"
    >
      <Text className="text-gray-700 font-JakartaBold text-3xl">{icon}</Text>
      <Text className="text-gray-800 font-JakartaBold text-base mt-2">
        {name}
      </Text>
    </View>
  );
};

export default CategoryCard;
