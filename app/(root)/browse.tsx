import { View, Text } from "react-native";
import React, { useState } from "react";
import InfiniteScrollList from "@/components/infiniteScroll";
import CustomInput from "@/components/ui/CustomInput";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Browse = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View className="flex-1 p-2">
      <CustomInput
        placeholder="Search for products"
        value={search}
        onChangeText={handleSearch}
        left={<FontAwesome name="search" size={24} color="black" />}
        placeholderTextColor={"black"}
        otherStyles="m-2 p-2 text-black bg-gray-100 border border-gray-300 rounded-lg"
        textStyles="text-black"
        onClear={() => setSearch("")}
        role="searchbox"
      />
      <InfiniteScrollList />
    </View>
  );
};

export default Browse;
