import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Property=()=>{
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text> this is my Property : {id} </Text>
     </View>
  );
}

export default Property;