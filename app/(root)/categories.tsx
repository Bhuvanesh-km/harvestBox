import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryCard from "@/components/ui/categoryCard";

const categoriesList = [
  {
    id: 1,
    name: "Fruits ",
    icon: "🍎",
  },
  {
    id: 2,
    name: "Grocery ",
    icon: "🍞",
  },
  {
    id: 3,
    name: "Dairy ",
    icon: "🥛",
  },
  {
    id: 4,
    name: "Beverages",
    icon: "🥤",
  },
  {
    id: 5,
    name: "Snacks",
    icon: "🍿",
  },
  {
    id: 6,
    name: "Meat",
    icon: "🍖",
  },
  {
    id: 7,
    name: "Seafood",
    icon: "🦞",
  },
  {
    id: 8,
    name: "Bakery",
    icon: "🥖",
  }
];

const Categories = () => {
  return (
    <View className="flex-1 p-2 bg-slate-200">
      <FlatList
        data={categoriesList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryCard
            id={item.id}
            name={item.name}
            icon={item.icon}
      
          />
        )}
      />
    </View>
  );
};

export default Categories;
