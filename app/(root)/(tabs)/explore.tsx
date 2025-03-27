import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResult";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { useAppwrite } from "@/lib/useAppwrite";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Explore() {


  const params = useLocalSearchParams<{query?:string, filter?:string}>();

  const {data:latestProperties, loading:latestPropertiesLoading}=useAppwrite({
    fn: getLatestProperties
  })

  const {data:properties,loading, refetch}=useAppwrite({
    fn: getProperties,
    params:{
      query:params.query!,
      filter: params.filter!,
      limit:20
    },
    skip:true
  })

  const handleCardPress =(id:string)=> router.push(`/properties/${id}`)

  useEffect(()=>{
    refetch({
      query:params.query!,
      filter: params.filter!,
      limit:20
    })
  },[params.filter,params.query])


  return (
    <SafeAreaView className="bg-white h-full">
      
      <FlatList
        data={properties}
        renderItem={({ item }) => <Card item={item} onPress={()=>handleCardPress(item.$id)} />}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        columnWrapperClassName="flex gap-5 px-5"
        ListEmptyComponent={
          loading? <ActivityIndicator size={"large"}></ActivityIndicator> : <NoResults/>
        }
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity onPress={()=>router.back()} className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center">

              <Image source={icons.backArrow} className="size-5"/>
              </TouchableOpacity>
              <Text className="text-base text-black-300 text-center mr-2 font-rubik-medium">Search for Your Ideal Home</Text>
              <Image source={icons.bell} className="size-5"/>
            </View>
<Search/>
<Filters/>
<Text className="mt-5 text-xl font-rubik-bold text-black-300">
  Found {properties?.length} Properties
</Text>
          </View>
        }
      ></FlatList>
    </SafeAreaView>
  );
}
