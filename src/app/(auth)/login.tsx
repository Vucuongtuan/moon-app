import LoginForm from '@/src/components/Form/LoginForm';
import { Text } from '@/src/components/ui/Text';
import { useTranslations } from '@/src/hooks/useTranslations';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { styles } from './login.styles';

export default function LoginScreen() {
    const { t } = useTranslations('auth.login');

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
                    {/* Header */}
                    <View style={styles.headerCtn}>
                        <Text style={styles.titleTxt}>
                            {t('title')}
                        </Text>
                        <Text style={styles.subtitleTxt}>
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