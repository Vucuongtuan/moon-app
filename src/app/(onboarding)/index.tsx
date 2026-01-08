import { IntroScreen } from "@/src/components/Intro";
import React from 'react';
import { View } from "react-native";
import { styles } from "./index.styles";

export default function Intro() {

    return (
        <View style={styles.ctn}>
            <IntroScreen />
        </View>
    );
}