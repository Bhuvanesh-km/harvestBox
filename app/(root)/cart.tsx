import { View, Text } from "react-native";
import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Cart = () => {
  return (
    //render cart screen
    <View className="flex-1 p-2 bg-slate-200">
      <View className="flex-1 items-center justify-center">
        <View className="justify-center items-center mb-8 w-20 h-20 bg-slate-400 rounded-lg">
          <Ionicons name="bag-add" size={50} color="black" />
        </View>
        <Text className="text-gray-800 font-JakartaBold text-3xl">
          Cart is Empty
        </Text>
        <CustomButton
          title="Browse Products"
          onPress={() => router.navigate("/(root)/categories")}
          otherStyles=""
          disabled={false}
          loading={false}
        />
      </View>
    </View>
  );
};

export default Cart;
