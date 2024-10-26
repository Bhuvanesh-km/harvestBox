import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CustomButton from "../../components/ui/CustomButton";
import { authenticateOtp } from "@/lib/appwrite";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useAuth } from "@/context/authContext";

const ValidateOtp = () => {
  const [timer, setTimer] = useState(5);
  const { signIn } = useAuth();
  const { userId, phoneNumber } = useLocalSearchParams("phoneNumber, userId");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text.length === 1 && index < otpInputRefs.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const validateOtp = async () => {
    try {
      const enteredOtp = otp.join("");
      const sessionId = await authenticateOtp(userId, enteredOtp);
      if (typeof sessionId !== "string") {
        throw new Error("Invalid Session String");
      }
      signIn(sessionId);
      router.replace("/(root)/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="mb-10">
        <Text className="font-JakartaBold pb-4 text-4xl ">
          Verifying Your Number
        </Text>
        <Text className="font-JakartaRegular text-base">
          Enter the OTP sent to your number
        </Text>
        <Text className="font-JakartaRegular text-base mb-5">
          +91 {phoneNumber}
        </Text>
      </View>
      <Text className="font-JakartaMedium text-lg mb-5">Enter OTP</Text>
      <View className="flex-row justify-between mb-5">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            className="border-b-2 border-gray-400 w-10 text-xl mr-2 text-center"
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={otpInputRefs[index]}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
                otpInputRefs[index - 1].current.focus();
              }
            }}
          />
        ))}
      </View>
      <CustomButton
        title="verify"
        onPress={validateOtp}
        disabled={otp.some((digit) => digit === "")}
        otherStyles="w-3/4 mx-auto"
      />
      <View className="mt-5 flex-row justify-around w-full">
        {timer === 0 ? (
          <TouchableOpacity onPress={() => setTimer(3)}>
            <Text className="font-JakartaRegular text-base">Resend OTP</Text>
          </TouchableOpacity>
        ) : (
          <Text className="font-JakartaRegular text-base">
            {`Resend OTP in ${timer} seconds`}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ValidateOtp;
