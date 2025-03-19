import icons from '@/constants/icons';
import images from '@/constants/images';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface Props{
    onPress:()=>void;
}

export const FeaturedCard = ({onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
        <Image source={images.japan} className='rounded-2xl size-full'/>
        <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0' />
        <View className='flex flex-row items-center bg-accent-100/90 px-3 top-5 right-5 py-1.5 absolute rounded-full'>
            <Image source={icons.star} className='size-3.5'/>
            <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>4.4</Text>
        </View>
        <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
<Text className='text-accent-100 font-rubik-extrabold  text-xl ' numberOfLines={1}>Modern Apartment</Text>
<Text className='text-base font-rubik text-accent-100'>22 W 15th St, New York</Text>
<View className='flex flex-row items-center justify-between w-full'>
    <Text className="text-xl font-rubik-extrabold text-accent-100">
        $2500
    </Text>
    <Image source={icons.heart} className='size-5'/>

</View>
        </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
    return (
      <View>
        <Text>Card Page</Text>
      </View>
    );
  };