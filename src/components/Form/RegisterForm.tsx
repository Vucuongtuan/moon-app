import { useTranslations } from '@/src/hooks/useTranslations';
import { RegisterFormData, registerSchema } from '@/src/schemas/auth.schema';
import { register } from '@/src/service/rest/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { Button, ControlledInput } from '../ui';
import { Text } from '../ui/Text';
import { styles } from './RegisterForm.styles';

export default function RegisterForm() {
  const router = useRouter();
  const { t } = useTranslations('auth.register');

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await register(data);
      if (!res) throw new Error('Register failed');
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <View style={styles.ctn}>
      {/* Full Name Input */}
      <ControlledInput
        control={control}
        name="fullName"
        label={t('fullName')}
        placeholder={t('fullNamePlaceholder')}
        autoCapitalize="words"
        autoComplete="name"
        textContentType="name"
      />

      {/* Email Input */}
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

      {/* Password Input */}
      <ControlledInput
        control={control}
        name="password"
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        secureTextEntry
        autoCapitalize="none"
        autoComplete="password-new"
        textContentType="newPassword"
        type="password"
      />

      {/* Confirm Password Input */}
      <ControlledInput
        control={control}
        name="confirmPassword"
        label={t('confirmPassword')}
        placeholder={t('confirmPasswordPlaceholder')}
        secureTextEntry
        autoCapitalize="none"
        autoComplete="password-new"
        textContentType="newPassword"
        type="password"
      />

      {/* Password Requirements */}
      <View style={styles.requirementsCtn}>
        <Text style={styles.requirementsTitleTxt}>
          {t('passwordRequirements')}
        </Text>
        <View style={styles.requirementsListCtn}>
          <View style={styles.requirementItemCtn}>
            <View style={styles.requirementDot} />
            <Text style={styles.requirementTxt}>{t('minLength')}</Text>
          </View>
          <View style={styles.requirementItemCtn}>
            <View style={styles.requirementDot} />
            <Text style={styles.requirementTxt}>{t('uppercase')}</Text>
          </View>
          <View style={styles.requirementItemCtn}>
            <View style={styles.requirementDot} />
            <Text style={styles.requirementTxt}>{t('lowercase')}</Text>
          </View>
          <View style={styles.requirementItemCtn}>
            <View style={styles.requirementDot} />
            <Text style={styles.requirementTxt}>{t('number')}</Text>
          </View>
        </View>
      </View>

      {/* Register Button */}
      <View style={styles.registerBtnWrapper}>
        <Button
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          style={styles.registerBtn}
        >
          <Text style={styles.registerBtnTxt}>
            {isSubmitting ? t('registering') : t('registerButton')}
          </Text>
        </Button>
      </View>

      {/* Divider */}
      <View style={styles.dividerCtn}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerTxt}>{t('orDivider')}</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Social Register Buttons */}
      <View style={styles.socialBtnsCtn}>
        <Button variant="outline" style={styles.socialBtn}>
          <Text style={styles.socialBtnTxt}>{t('continueWithGoogle')}</Text>
        </Button>

        <Button variant="outline" style={styles.socialBtn}>
          <Text style={styles.socialBtnTxt}>{t('continueWithApple')}</Text>
        </Button>
      </View>

      {/* Sign In Link */}
      <View style={styles.footerCtn}>
        <Text style={styles.footerTxt}>{t('haveAccount')} </Text>
        <Link href="/(auth)/login" asChild>
          <Pressable style={styles.signInBtn}>
            <Text style={styles.signInTxt}>{t('signInNow')}</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
