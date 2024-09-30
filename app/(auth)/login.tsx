import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import {  getToken } from "@/lib/appwrite";
import { images } from "@/constants";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import { useAuth } from "@/context/authContext";

const Login = () => {
  const { updateUserId } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handelPhoneNumberChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPhoneNumber(e.nativeEvent.text.slice(0, 10));
  };

  const handelLoginPress = async () => {
    console.log("initiated");
    try {
      setLoading(true);
      const userId = await getToken(phoneNumber);
      if (!userId) {
        throw new Error("Failed to get userId");
      }
      updateUserId(userId);
      router.replace("/(auth)/validateOtp");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
              className="w-24 h-24 mx-auto rounded-full"
              resizeMode="contain"
            />
          </View>
        </View>
        <Text className=" text-black mt-14 text-center text-2xl font-JakartaBold p-4">
          Welcome to HarvestBox
        </Text>
        <Text className="text-center text-gray-800 text-base font-JakartaMedium">
          Let's get started
        </Text>
        <View className="p-4">
          <CustomInput
            placeholder="Enter your phone number"
            onChange={handelPhoneNumberChange}
            onClear={() => setPhoneNumber("")}
            // keyboardType="number-pad"
            value={phoneNumber}
            left={<Text className="font-JakartaBold text-base">+ 91 |</Text>}
            inputMode="numeric"
          />
          <CustomButton
            title="Continue"
            loading={loading}
            onPress={handelLoginPress}
            disabled={phoneNumber.length !== 10}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
