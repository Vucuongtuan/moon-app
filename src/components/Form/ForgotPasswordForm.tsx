import { useTranslations } from '@/src/hooks/useTranslations';
import { i18n } from '@/src/i18n';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import { z } from 'zod';
import { Button, ControlledInput } from '../ui';
import { Text } from '../ui/Text';
import { styles } from './ForgotPasswordForm.styles';

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
      buttonScale.value = withSequence(withSpring(0.95), withSpring(1));

      // TODO: Implement forgot password logic

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

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
    <View style={styles.ctn}>
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
        style={styles.infoCtn}
      >
        <View style={styles.infoContentCtn}>
          <View style={styles.infoIconCtn}>
            <Text style={styles.infoIconTxt}>i</Text>
          </View>
          <Text style={styles.infoTxt}>{t('infoMessage')}</Text>
        </View>
      </Animated.View>

      {/* Submit Button */}
      <Animated.View
        entering={FadeInUp.duration(600).delay(400)}
        style={[styles.submitBtnWrapper, buttonAnimatedStyle]}
      >
        <Button
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          style={styles.submitBtn}
        >
          <Text style={styles.submitBtnTxt}>
            {isSubmitting ? t('sending') : t('submitButton')}
          </Text>
        </Button>
      </Animated.View>
    </View>
  );
}
