import { IntroScreen } from "@/src/components/Intro";
import React from 'react';
import { View } from "react-native";


export default function Intro() {

    return (
        <View className="flex-1 bg-[#f8f5ee]">
            <IntroScreen />
        </View>
    );
}