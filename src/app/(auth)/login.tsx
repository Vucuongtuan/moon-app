import LoginForm from '@/src/components/Form/LoginForm';
import { Text } from '@/src/components/ui/Text';
import { useTranslations } from '@/src/hooks/useTranslations';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

export default function LoginScreen() {
    const { t } = useTranslations('auth.login');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ScrollView
                className="flex-1 "
                contentContainerClassName="flex-grow px-6"
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 pt-4 pb-8">
                    {/* Header */}
                    <View
                        className="pt-14 pb-8"
                    >
                        <Text className="text-3xl font-bold text-[#141414] mb-2 leading-tight">
                            {t('title')}
                        </Text>
                        <Text className="text-sm text-gray-600 leading-relaxed">
                            {t('subtitle')}
                        </Text>
                    </View>
                    {/* Form */}
                    <LoginForm />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}