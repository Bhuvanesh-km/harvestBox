import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CategoriesBanner from "@/components/categoriesBanner";
import FeaturedBanner from "@/components/featuredBanner";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <ImageBackground
        source={images.homeScreen_bg}
        className="flex-1 w-screen h-[448px]"
        resizeMode="contain"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,1)"]}
          className="flex-1"
        >
          <SafeAreaView className="flex-1">
            <View className="flex-1 items-center">
              <Image
                source={images.harvestboxLogo}
                className="w-20 h-20 rounded-full"
              />
              {/* <Text className="text-white text-3xl font-JakartaBold mt-4">
                Welcome to HarvestBox
              </Text> */}
            </View>
            <View className="flex-1 p-4 gap-2">
              <Text className="text-white text-sm font-JakartaMedium">
                Fruits & Vegetables
              </Text>
              <Text className="text-white text-3xl py-2 font-JakartaExtraBold">
                Produced By Farmers & Delivered To You
              </Text>
              <Text className="text-white font-JakartaMedium">
                Fresh, Organic & Pesticide-Free
              </Text>
              <Text className="text-[#93C22F] text-lg font-JakartaMedium">
                Order Now
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
      {/* categories */}
      <CategoriesBanner />
      {/* Featured products */}
      <FeaturedBanner />
    </ScrollView>
  );
};

export default Home;
