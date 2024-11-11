import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { router, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#93C22F" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="search" color={color} />
          ),
          header: () => (
            <SafeAreaView className="flex-row py-4 items-center px-1 border-b">
              <AntDesign
                onPress={() => router.back()}
                name="left"
                size={24}
                color="black"
              />
              <Text className="text-gray-800 px-2 font-JakartaBold text-2xl">
                Browse Products
              </Text>
            </SafeAreaView>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <Entypo name="grid" size={24} color={color} />
          ),
          header: () => (
            <SafeAreaView className="flex-row py-4 items-center px-1 border-b">
              <AntDesign
                onPress={() => router.back()}
                name="left"
                size={24}
                color="black"
              />
              <Text className="text-gray-800 px-2 font-JakartaBold text-2xl">
                Categories
              </Text>
            </SafeAreaView>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={20} color={color} />
          ),
          header: () => (
            <SafeAreaView className="flex-row py-4 items-center px-1 border-b">
              <AntDesign
                onPress={() => router.back()}
                name="left"
                size={24}
                color="black"
              />
              <Text className="text-gray-800 px-2 font-JakartaBold text-2xl">
                Cart
              </Text>
            </SafeAreaView>
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={20} color={color} />
          ),
          header: () => (
            <SafeAreaView className="flex-row py-4 items-center px-1 border-b drop-shadow-md">
              <AntDesign
                onPress={() => router.back()}
                name="left"
                size={24}
                color="black"
              />
              <Text className="text-gray-800 px-2 font-JakartaBold text-2xl">
                Account
              </Text>
            </SafeAreaView>
          ),
        }}
      />
    </Tabs>
  );
}
