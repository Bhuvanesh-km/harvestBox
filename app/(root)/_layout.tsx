import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      {/* <Stack.Screen name="validateOtp" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
