import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants";

interface CustomInputProps {
  left?: React.ReactNode;
  right?: boolean;
  onClear?: () => void;
}

const CustomInput: React.FC<
  CustomInputProps & React.ComponentProps<typeof TextInput>
> = ({ left, right = true, onClear, ...props }) => {
  return (
    <View className="flex flex-row justify-center items-center border border-gray-200 rounded-lg py-3 px-2">
      {left && <View className="mr-2">{left}</View>}
      <TextInput
        {...props}
        className="flex-1 font-JakartaBold text-base tracking-[1.5px] text-gray-100"
        placeholderTextColor="white"
      />
      <View className="mr-2">
        {props.value?.length != 0 && right && (
          <TouchableOpacity onPress={onClear}>
            <Image source={icons.close} className="w-4 h-4" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
