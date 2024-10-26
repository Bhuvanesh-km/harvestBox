import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { getToken } from "@/lib/appwrite";
import { images } from "@/constants";
import { router } from "expo-router";
import { useAuth } from "@/context/authContext";

import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";

const Login = () => {
  const { isAuthenticated } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace({ pathname: "/(root)/home" }, );
    }
  }, [isAuthenticated]);

  const handelPhoneNumberChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPhoneNumber(e.nativeEvent.text.slice(0, 10));
  };

  const handelLoginPress = async () => {
    try {
      setLoading(true);
      const userId = await getToken(phoneNumber);
      router.replace({ pathname: "/(auth)/validateOtp", params: { phoneNumber, userId } });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="flex-1 bg-black h-screen">
        <View className="relative w-full">
          <Image
            source={images.splashImage}
            className="w-screen h-screen opacity-60"
            resizeMode="cover"
          />
        </View>
        <View className="absolute z-10 top-20 left-0 right-0 p-4">
          <Image
            source={images.harvestboxLogo}
            className="w-24 h-24 mx-auto rounded-full"
            resizeMode="contain"
          />
          <Text className="text-white mt-8 text-center text-2xl font-JakartaExtraBold p-4">
            Welcome to HarvestBox
          </Text>
          <Text className="text-center my-4 text-4xl font-JakartaBold text-white">
            Fresh groceries just for you
          </Text>
          <Text className="text-center mb-6 text-lg text-white">
            All Items have real freshness and are intended for your needs.
          </Text>
          <View className="p-4">
            <CustomInput
              placeholder="Enter your phone number"
              onChange={handelPhoneNumberChange}
              onClear={() => setPhoneNumber("")}
              // keyboardType="number-pad"
              value={phoneNumber}
              left={
                <Text className="font-JakartaBold text-white text-base">
                  + 91 |
                </Text>
              }
              inputMode="numeric"
            />
            <CustomButton
              title="continue"
              loading={loading}
              onPress={handelLoginPress}
              disabled={phoneNumber.length !== 10}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
