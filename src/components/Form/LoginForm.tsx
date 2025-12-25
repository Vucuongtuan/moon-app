import { useTranslations } from "@/src/hooks/useTranslations";
import { LoginFormData, loginSchema } from "@/src/schemas/auth.schema";
import useAuth from "@/src/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { Pressable, View } from "react-native";
import { Button, ControlledInput } from "../ui";
import { Text } from "../ui/Text";

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
        <View className="gap-3">
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
            <View className="items-end -mt-1">
                <Link href="/(auth)/forgot-password" asChild>
                    <Pressable className="py-1">
                        <Text className="text-sm text-[#3569ed] font-medium">
                            {t('forgotPassword')}
                        </Text>
                    </Pressable>
                </Link>
            </View>

            {/* Login Button */}
            <View className="mt-1">
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="w-full bg-[#141414] h-12 rounded-xl shadow-lg shadow-black/10"
                >
                    <Text className="text-white font-semibold text-base">
                        {isSubmitting ? t('loggingIn') : t('loginButton')}
                    </Text>
                </Button>
            </View>

            {/* Divider */}
            <View className="flex-row items-center my-4">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 text-sm text-gray-500 font-medium text-center">
                    {t('orDivider')}
                </Text>
                <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Social Login Buttons */}
            <View className="gap-2">
                <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl border border-gray-200 bg-white"
                >
                    <Text className="text-[#141414] font-semibold">
                        {t('continueWithGoogle')}
                    </Text>
                </Button>

                <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl border border-gray-200 bg-white"
                >
                    <Text className="text-[#141414] font-semibold">
                        {t('continueWithApple')}
                    </Text>
                </Button>
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center items-center mt-6 mb-4">
                <Text className="text-gray-600 text-base">
                    {t('noAccount')}{' '}
                </Text>
                <Link href="/(auth)/register" asChild>
                    <Pressable className="py-1">
                        <Text className="text-[#3569ed] font-bold text-base">
                            {t('signUpNow')}
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}