import ForgotPasswordForm from '@/src/components/Form/ForgotPasswordForm';
import { Text } from '@/src/components/ui/Text';
import { useTranslations } from '@/src/hooks/useTranslations';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const { t } = useTranslations('auth.forgotPassword');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ScrollView
                className="flex-1 bg-[#f8f5ee]"
                contentContainerClassName="flex-grow px-6"
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 pt-8 pb-8">
                    {/* Back Button */}
                    <Animated.View
                        entering={FadeInUp.duration(400).delay(50)}
                        className="mb-8"
                    >
                        <Pressable
                            onPress={() => router.back()}
                            className="flex-row items-center py-2 -ml-2"
                        >
                            <Text className="text-[#3569ed] font-semibold text-base">
                                {t('backButton')}
                            </Text>
                        </Pressable>
                    </Animated.View>

                    {/* Header */}
                    <Animated.View
                        entering={FadeInDown.duration(600).delay(100)}
                        className="mb-10"
                    >
                        <Text className="text-4xl font-bold text-[#141414] mb-3 leading-tight">
                            {t('title')}
                        </Text>
                        <Text className="text-base text-gray-600 leading-relaxed">
                            {t('subtitle')}
                        </Text>
                    </Animated.View>

                    {/* Form */}
                    <ForgotPasswordForm />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
