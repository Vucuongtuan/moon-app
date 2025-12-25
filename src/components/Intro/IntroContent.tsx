import { i18n } from "@/src/i18n";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Text } from "../ui/Text";
import SelectLang from "./SelectLang";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface IntroContentProps {
    title: string;
    description: string;
    showAuthButtons?: boolean;
    currentIndex: number;
    totalSteps: number;
    onNext: () => void;
    onPrev: () => void;
    onSignUp?: () => void;
    onSignIn?: () => void;
    hasImage?: boolean;
}

export default function IntroContent({
    title,
    description,
    showAuthButtons = false,
    currentIndex,
    totalSteps,
    onNext,
    onPrev,
    onSignUp,
    onSignIn,
}: IntroContentProps) {
    const isFirstStep = currentIndex === 0;
    const isLastStep = currentIndex === totalSteps - 1;

    return (
        <>
            <View className="prose prose-lg">
                <Text className="text-5xl font-bold  leading-tight mb-3">
                    {title}
                </Text>

                <Text className="prose prose-lg dark:text-gray-400 text-gray-500 mb-4 leading-relaxed">
                    {description}
                </Text>
            </View>
            {isFirstStep && (
                <SelectLang
                />
            )}
            <View className="">
                {showAuthButtons && (
                    <View className="flex-row gap-4">
                        <TouchableOpacity
                            className="flex-1 py-4 border-2 border-[#141414] rounded-full items-center justify-center"
                            onPress={onSignUp}
                        >
                            <Text className="text-[#141414] font-semibold text-base">
                                {i18n.t('onboading.signUp')}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="flex-1 py-4 bg-[#ff8c42] rounded-full items-center justify-center"
                            onPress={onSignIn}
                        >
                            <Text className="text-white font-semibold text-base">
                                {i18n.t('onboading.signIn')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}

                {!showAuthButtons && (
                    <View className="flex-row gap-4">
                        {!isFirstStep && (
                            <TouchableOpacity
                                className="flex-1 py-4 border-2 border-[#141414] rounded-full items-center justify-center"
                                onPress={onPrev}
                            >
                                <Text className="text-[#141414] font-semibold text-base">
                                    {i18n.t('onboading.prev')}
                                </Text>
                            </TouchableOpacity>
                        )}

                        {!isLastStep && (
                            <TouchableOpacity
                                className="flex-1 py-4 bg-[#ff8c42] rounded-full items-center justify-center"
                                onPress={onNext}
                            >
                                <Text className="text-white font-semibold text-base">
                                    {i18n.t('onboading.next')}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>

        </>
    );
}