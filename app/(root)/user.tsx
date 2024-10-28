import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAuth } from "@/context/authContext";

const settingsList = [
  {
    id: 1,
    name: "Orders",
    icon: "profile",
  },
  {
    id: 2,
    name: "Address",
    icon: "enviromento",
  },
  {
    id: 3,
    name: "Customer Support",
    icon: "customerservice",
  },
  {
    id: 4,
    name: "Payment",
    icon: "creditcard",
  },
  {
    id: 5,
    name: "Refer a Friend",
    icon: "adduser",
  },
  {
    id: 6,
    name: "General info",
    icon: "infocirlceo",
  },
  {
    id: 7,
    name: "Refunds",
    icon: "retweet",
  },
];

const User = () => {
  const { signOut } = useAuth();
  return (
    <View className="flex-1 p-2 ">
      <View className="flex-row items-center py-4 px-2 gap-3">
        <View className="justify-center items-center w-16 h-16 bg-slate-400 rounded-full">
          <AntDesign
            name="user"
            size={40}
            color="black"
            className="flex justify-center items-center w-full h-full"
          />
        </View>
        <View className="flex-col">
          <Text className="text-gray-800 font-JakartaBold text-2xl">
            User Name
          </Text>
          <Text className="text-gray-800 font-JakartaBold text-base">
            User Phone
          </Text>
        </View>
      </View>
      {/* render a list of settings */}

      {settingsList.map((setting) => (
        <View
          key={setting.id}
          className="flex-row items-center justify-between py-4 px-2 border-b"
        >
          <View className="flex-row items-center gap-3">
            <AntDesign
              name={setting.icon as keyof typeof AntDesign.glyphMap}
              size={24}
              color="black"
            />
            <Text className="text-gray-700 font-JakartaMedium text-sm">
              {setting.name}
            </Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </View>
      ))}
      <View className="flex items-center justify-center py-8">
        <TouchableOpacity
          onPress={() => signOut()}
          className="flex border border-gray-300 rounded-lg p-1 items-center justify-center"
        >
          <Text className="text-red-500 font-JakartaSemiBold p-1 text-base">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;
