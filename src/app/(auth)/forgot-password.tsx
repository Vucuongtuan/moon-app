import ForgotPasswordForm from '@/src/components/Form/ForgotPasswordForm';
import { Text } from '@/src/components/ui/Text';
import { useTranslations } from '@/src/hooks/useTranslations';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { styles } from './forgot-password.styles';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const { t } = useTranslations('auth.forgotPassword');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.ctn}
        >
            <ScrollView
                style={styles.scrollCtn}
                contentContainerStyle={styles.scrollContentCtn}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.mainCtn}>
                    {/* Back Button */}
                    <Animated.View
                        entering={FadeInUp.duration(400).delay(50)}
                        style={styles.backBtnWrapper}
                    >
                        <Pressable
                            onPress={() => router.back()}
                            style={styles.backBtn}
                        >
                            <Text style={styles.backBtnTxt}>
                                {t('backButton')}
                            </Text>
                        </Pressable>
                    </Animated.View>

                    {/* Header */}
                    <Animated.View
                        entering={FadeInDown.duration(600).delay(100)}
                        style={styles.headerCtn}
                    >
                        <Text style={styles.titleTxt}>
                            {t('title')}
                        </Text>
                        <Text style={styles.subtitleTxt}>
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
