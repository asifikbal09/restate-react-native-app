import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full"> 
      <View className="px-5">
        <View className="flex flex-row item-center justify-between mt-5">
          <View className="flex flex-row item-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col justify-center item-start ml-2">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">Asif Ikbal</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6"></Image>
        </View>
      </View>
    </SafeAreaView>
  );
}
