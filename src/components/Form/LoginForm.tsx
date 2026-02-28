import { useTranslations } from "@/src/hooks/useTranslations";
import { LoginFormData, loginSchema } from "@/src/schemas/auth.schema";
import useAuth from "@/src/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { Pressable, View } from "react-native";
import { Button, ControlledInput } from "../ui";
import { Text } from "../ui/Text";
import { styles } from "./LoginForm.styles";

export default function LoginForm() {
    const router = useRouter();
    const { t } = useTranslations('auth.login');
    const {login} = useAuth();
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const {email, password} = data;

            const res = await login({email, password});

            if (!res) throw new Error('Login failed');

            router.replace('/(tabs)');
        } catch (error) {   
            console.error('Login error:', error);
        }
    };

    return (
        <View style={styles.ctn}>
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
                autoComplete="password"
                textContentType="password"
                type="password"
            />

            {/* Forgot Password */}
            <View style={styles.forgotPwdCtn}>
                <Link href="/(auth)/forgot-password" asChild>
                    <Pressable
                        style={styles.forgotPwdBtn}
                        accessibilityRole="link"
                        accessibilityLabel={t('forgotPassword')}
                    >
                        <Text style={styles.forgotPwdTxt}>
                            {t('forgotPassword')}
                        </Text>
                    </Pressable>
                </Link>
            </View>

            {/* Login Button */}
            <View style={styles.loginBtnWrapper}>
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginBtnTxt}>
                        {isSubmitting ? t('loggingIn') : t('loginButton')}
                    </Text>
                </Button>
            </View>

            {/* Divider */}
            <View style={styles.dividerCtn}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerTxt}>
                    {t('orDivider')}
                </Text>
                <View style={styles.dividerLine} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialBtnsCtn}>
                <Button
                    variant="outline"
                    style={styles.socialBtn}
                >
                    <Text style={styles.socialBtnTxt}>
                        {t('continueWithGoogle')}
                    </Text>
                </Button>

                <Button
                    variant="outline"
                    style={styles.socialBtn}
                >
                    <Text style={styles.socialBtnTxt}>
                        {t('continueWithApple')}
                    </Text>
                </Button>
            </View>

            {/* Sign Up Link */}
            <View style={styles.footerCtn}>
                <Text style={styles.footerTxt}>
                    {t('noAccount')}{' '}
                </Text>
                <Link href="/(auth)/register" asChild>
                    <Pressable
                        style={styles.signUpBtn}
                        accessibilityRole="link"
                        accessibilityLabel={t('signUpNow')}
                    >
                        <Text style={styles.signUpTxt}>
                            {t('signUpNow')}
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}