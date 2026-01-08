import RegisterForm from '@/src/components/Form/RegisterForm';
import { Text } from '@/src/components/ui/Text';
import { useTranslations } from '@/src/hooks/useTranslations';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { styles } from './register.styles';

export default function RegisterScreen() {
    const { t } = useTranslations('auth.register');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.ctn}
        >
            <View style={styles.mainCtn}>
                <View style={styles.contentCtn}>
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
                    <RegisterForm />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}