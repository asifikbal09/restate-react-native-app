import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, SafeAreaView } from "react-native";

export default function AppLayout(){
    const {isLogged,loading} = useGlobalContext()

    if(loading){
        return (
            <SafeAreaView className="bg-accent-100 h-full flex justify-center items-center"> 
                <ActivityIndicator size="large" className="text-primary-300" />
            </SafeAreaView>
        )
    }

    if(!isLogged){
        return <Redirect href={"/sign-in"}/>
    }
    
    return <Slot/>
}