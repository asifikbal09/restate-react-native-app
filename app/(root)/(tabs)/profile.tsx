import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsItemProps{
  icon:ImageSourcePropType;
  title:string;
  onPress?:()=>void;
  textStyle?:string;
  showArrow?:boolean
}

const SettingItem =({icon,title,onPress,textStyle,showArrow=true}:SettingsItemProps)=>(
  <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className="text-lg font-rubik-medium text-black-300">{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5"/>}
  </TouchableOpacity>
)

const Profile=()=> {

  const {user,refetch} = useGlobalContext()

  const handleLogout = async() => {

    const result = await logout()
    
    if(result){
      Alert.alert("Success", "You have been logged out successfully.");
      refetch()
    }else{
      Alert.alert("Error","An error Occurred while logging out.")
    }

  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row justify-between items-center mt-5">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image source={icons.bell} />
        </View>

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col relative items-center mt-5">
<Image source={{uri:user?.avatar}} className="size-44 relative rounded-full"/>
<TouchableOpacity className="absolute bottom-11 right-2">
  <Image source={icons.edit} className="size-9"/>
</TouchableOpacity>
<Text className="text-2xl font-rubik-bold">{user?.name}</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
<SettingItem icon={icons.calendar} title="My Bookings"/>
<SettingItem icon={icons.wallet} title="Payments"/>
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200"> 
{
  settings.slice(2).map((item,index)=><SettingItem key={index} {...item}/>)
}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200"> 
<SettingItem icon={icons.logout} title="Logout" showArrow={false} onPress={handleLogout}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;