import { useTranslations } from "@/src/hooks/useTranslations";
import { i18n } from "@/src/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import Animated, {
    FadeInDown,
    FadeInUp,
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withSpring
} from "react-native-reanimated";
import { z } from "zod";
import { Button, ControlledInput } from "../ui";
import { Text } from "../ui/Text";

const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, i18n.t('auth.validation.emailRequired'))
        .email(i18n.t('auth.validation.emailInvalid')),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
    const router = useRouter();
    const { t } = useTranslations('auth.forgotPassword');

    // Animation values
    const buttonScale = useSharedValue(1);

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
        try {
            // Button press animation
            buttonScale.value = withSequence(
                withSpring(0.95),
                withSpring(1)
            );

            console.log('Forgot password data:', data);
            // TODO: Implement forgot password logic

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Show success message or navigate
            alert(t('successMessage'));
            router.back();
        } catch (error) {
            console.error('Forgot password error:', error);
        }
    };

    const buttonAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: buttonScale.value }],
    }));

    return (
        <View className="gap-5">
            {/* Email Input */}
            <Animated.View entering={FadeInDown.duration(600).delay(200)}>
                <ControlledInput
                    control={control}
                    name="email"
                    label={t('email')}
                    placeholder={t('emailPlaceholder')}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    textContentType="emailAddress"
                />
            </Animated.View>

            {/* Info Box */}
            <Animated.View
                entering={FadeInUp.duration(600).delay(300)}
                className="bg-blue-50/80 p-4 rounded-2xl border-2 border-blue-100"
            >
                <View className="flex-row items-start gap-3">
                    <View className="w-6 h-6 rounded-full bg-blue-500/20 items-center justify-center mt-0.5">
                        <Text className="text-blue-600 font-bold text-xs">i</Text>
                    </View>
                    <Text className="flex-1 text-sm text-gray-700 leading-5">
                        {t('infoMessage')}
                    </Text>
                </View>
            </Animated.View>

            {/* Submit Button */}
            <Animated.View
                entering={FadeInUp.duration(600).delay(400)}
                style={buttonAnimatedStyle}
                className="mt-2"
            >
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="w-full bg-[#141414] h-14 rounded-2xl shadow-lg shadow-black/10"
                >
                    <Text className="text-white font-semibold text-base">
                        {isSubmitting ? t('sending') : t('submitButton')}
                    </Text>
                </Button>
            </Animated.View>
        </View>
    );
}
