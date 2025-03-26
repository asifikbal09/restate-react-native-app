import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const onPress=()=>{}
  return (
    <SafeAreaView className="bg-white h-full"> 
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32" >

      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col justify-center item-start ml-2">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">Asif Ikbal</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6"></Image>
        </View>
      <Search/>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">
            Featured
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row gap-5 mt-5">
        <FeaturedCard onPress={onPress}/>
        <FeaturedCard onPress={onPress}/>
        <FeaturedCard onPress={onPress}/>
      </View>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">
            Our Recommendation
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Filters/>
      <View className="flex flex-row gap-5 mt-5">
        <Card onPress={onPress}/>
        <Card onPress={onPress}/>
      </View>

      </View>
      </ScrollView>
    
    </SafeAreaView>
  );
}
