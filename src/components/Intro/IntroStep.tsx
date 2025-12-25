import { DefaultBlurImage } from "@/src/constants/theme";
import { cn } from "@/src/utils/cn";
import { Image, ImageSource } from "expo-image";
import React from 'react';
import { Dimensions, ScrollView, View } from "react-native";
import IntroContent from "./IntroContent";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

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
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            {hasImage && (
                <View style={{ height: SCREEN_HEIGHT * 0.6, position: 'relative' }} >
                    <Image
                        source={data.image}
                        placeholder={DefaultBlurImage}
                        contentFit='cover'
                        transition={1000}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderBottomLeftRadius: 32,
                            borderBottomRightRadius: 32
                        }}
                    />

                </View>
            )}

            {/* Content Section */}
            <View

                className={cn(
                    'flex-1 justify-between relative',
                    'px-6 py-8',
                )}
            >
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
