import RegisterForm from '@/src/components/Form/RegisterForm';
import { Text } from '@/src/components/ui/Text';
import { useTranslations } from '@/src/hooks/useTranslations';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function RegisterScreen() {
    const { t } = useTranslations('auth.register');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <View
                className="flex-1 bg-[#f8f5ee] flex-grow px-6"
            >
                <View className="flex-1 pt-4 pb-8">
                    {/* Header */}
                    <View className="pt-14 pb-8">
                        <Text className="text-3xl font-bold text-[#141414] mb-2 leading-tight">
                            {t('title')}
                        </Text>
                        <Text className="text-sm text-gray-600 leading-relaxed">
                            {t('subtitle')}
                        </Text>
                    </View>

                    {/* Form */}
                    <RegisterForm />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}