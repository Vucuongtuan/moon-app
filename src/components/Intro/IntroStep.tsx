import { DefaultBlurImage } from "@/src/constants/theme";
import { Image, ImageSource } from "expo-image";
import React from 'react';
import { ScrollView, View } from "react-native";
import IntroContent from "./IntroContent";
import { styles } from "./IntroStep.styles";

export interface IntroStepData {
    title: string;
    description: string;
    image?: ImageSource;
    showButtons?: boolean;
}

interface IntroStepProps {
    data: IntroStepData;
    currentIndex: number;
    totalSteps: number;
    onNext: () => void;
    onPrev: () => void;
    onSignUp?: () => void;
    onSignIn?: () => void;
}

export default function IntroStep({
    data,
    currentIndex,
    totalSteps,
    onNext,
    onPrev,
    onSignUp,
    onSignIn
}: IntroStepProps) {
    const hasImage = !!data.image;

    return (
        <ScrollView
            style={styles.scrollCtn}
            contentContainerStyle={styles.scrollContentCtn}
        >
            {hasImage && (
                <View style={styles.imageCtn} >
                    <Image
                        source={data.image}
                        placeholder={DefaultBlurImage}
                        contentFit='cover'
                        transition={1000}
                        style={styles.image}
                    />
                </View>
            )}

            {/* Content Section */}
            <View style={styles.contentCtn}>
                <IntroContent
                    title={data.title}
                    description={data.description}
                    showAuthButtons={data.showButtons}
                    currentIndex={currentIndex}
                    totalSteps={totalSteps}
                    onNext={onNext}
                    onPrev={onPrev}
                    onSignUp={onSignUp}
                    onSignIn={onSignIn}
                    hasImage={hasImage}
                />
            </View>
        </ScrollView>
    );
}
