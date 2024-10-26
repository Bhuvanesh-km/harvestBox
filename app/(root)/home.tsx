import { View, Text, Image, TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "@/components/ui/CustomButton";
import { useAuth } from "@/context/authContext";

const Home = () => {
  const { signOut } = useAuth();

  const logout = () => {
    signOut();
  }
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white h-full">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.loginBgImage}
            className="w-full h-[250px]"
            resizeMode="cover"
          />
          <View className="absolute z-10 -bottom-20 left-0 right-0 p-4">
            <Image
              source={images.harvestboxLogo}
              className="w-24 h-24 rounded-full mx-auto"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="p-4 mt-12">
          <Text className="text-2xl font-bold text-center">
            Welcome to HarvestBox
          </Text>
          <Text className="text-center text-gray-500 mt-2">
            Your one stop solution for all your grocery needs
          </Text>
        <CustomButton
          title="Logout"
          onPress={() => logout()}
          disabled={false}
          loading={false}
          otherStyles="text-s mx-auto bg-black rounded-full text-sm font-JakartaMedium"
        />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
