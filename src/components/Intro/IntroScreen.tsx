import { useLocale } from '@/src/provider/localeProvider';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import IntroStep from "./IntroStep";
import { getIntroSteps } from "./introConfig";

export default function IntroScreen() {
    const { locale } = useLocale();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [introSteps, setIntroSteps] = useState(getIntroSteps());
    const router = useRouter()
    useEffect(() => {
        setIntroSteps(getIntroSteps());
    }, [locale]);

    const handleNext = () => {
        if (currentIndex < introSteps.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSignUp = () => router.push('/(auth)/login');

    const handleSignIn = () => router.push('/(auth)/register');

    const currentStep = introSteps[currentIndex];

    return (
        <Animated.View
            key={`step-${currentIndex}`}
            entering={FadeIn.duration(400)}
            exiting={FadeOut.duration(300)}
            style={{ flex: 1 }}
        >
            <IntroStep
                data={currentStep}
                currentIndex={currentIndex}
                totalSteps={introSteps.length}
                onNext={handleNext}
                onPrev={handlePrev}
                onSignUp={handleSignUp}
                onSignIn={handleSignIn}
            />
        </Animated.View>

    );
}
// {/* Pagination Dots */ }
// {/* <View className="absolute bottom-32 left-0 right-0 flex-row justify-center gap-2">
//     {introSteps.map((_, index) => (
//         <View
//             key={`dot-${index}`}
//             className={`h-2 rounded-full transition-all ${index === currentIndex
//                     ? 'w-8 bg-[#ff8c42]'
//                     : 'w-2 bg-gray-300'
//                 }`}
//         />
//     ))}
// </View> */}