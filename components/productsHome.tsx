import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ProductsHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("default");

  const categories = ["All", "Bestsellers"];
  const sortOptions = [
    "Default",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
  ];

  const handleFilter = () => {
    // Implement your filter logic here
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Sort:", selectedSort);
  };

  return (
    <View className="p-2 flex-row w-full border">
      <View className="flex-1">
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          {categories.map((category) => (
            <Picker.Item
              key={category}
              label={category}
              value={category.toLowerCase()}
            />
          ))}
        </Picker>
      </View>
      <View className="flex-1">
        <Picker
          selectedValue={selectedSort}
          onValueChange={(itemValue) => setSelectedSort(itemValue)}
        >
          {sortOptions.map((option) => (
            <Picker.Item
              key={option}
              label={option}
              value={option.toLowerCase()}
            />
          ))}
        </Picker>
      </View>
      <View className="flex-1">
        <Button title="Apply Filters" onPress={handleFilter} />
      </View>
    </View>
  );
};

export default ProductsHome;
