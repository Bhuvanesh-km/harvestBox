import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "../../components/ui/CustomButton";
import { authenticateOtp } from "@/lib/appwrite";
import { useAuth } from "@/context/authContext";
import { Router, router } from "expo-router";

const ValidateOtp = () => {
  const { userId } = useAuth();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleOtpChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < otpInputRefs.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const validateOtp = () => {
    const enteredOtp = otp.join("");
    console.log("====================================");
    console.log("Entered OTP: ", enteredOtp);
    console.log("====================================");
    const session = authenticateOtp(userId, enteredOtp);
    if (session) {
      console.log("====================================");
      console.log("OTP validated successfully");
      console.log("====================================");
    }
    router.replace("/(root)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
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
        title="Validate OTP"
        onPress={validateOtp}
        disabled={otp.some((digit) => digit === "")}
        otherStyles="w-3/4 mx-4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderColor: "gray",
    width: 40,
    fontSize: 20,
    textAlign: "center",
    marginRight: 10,
  },
});

export default ValidateOtp;
