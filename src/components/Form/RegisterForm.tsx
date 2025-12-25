import { useTranslations } from "@/src/hooks/useTranslations";
import { RegisterFormData, registerSchema } from "@/src/schemas/auth.schema";
import { register } from "@/src/service/rest/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { Pressable, View } from "react-native";
import { Button, ControlledInput } from "../ui";
import { Text } from "../ui/Text";

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
            console.log('Register data:', data);
            const res = await register(data);
            if (!res) throw new Error('Register failed');
            router.replace('/(auth)/login');
        } catch (error) {
            console.error('Register error:', error);
        }
    };

    return (
        <View className="gap-3">
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
            <View className="bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                <Text className="text-xs text-gray-700 mb-2 font-semibold">
                    {t('passwordRequirements')}
                </Text>
                <View className="flex-row flex-wrap gap-x-4 gap-y-1">
                    <View className="flex-row items-center gap-1.5">
                        <View className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <Text className="text-[10px] text-gray-600">
                            {t('minLength')}
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-1.5">
                        <View className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <Text className="text-[10px] text-gray-600">
                            {t('uppercase')}
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-1.5">
                        <View className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <Text className="text-[10px] text-gray-600">
                            {t('lowercase')}
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-1.5">
                        <View className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <Text className="text-[10px] text-gray-600">
                            {t('number')}
                        </Text>
                    </View>
                </View>
            </View>


            {/* Register Button */}
            <View className="mt-1">
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="w-full bg-[#141414] h-12 rounded-xl shadow-lg shadow-black/10"
                >
                    <Text className="text-white font-semibold text-base">
                        {isSubmitting ? t('registering') : t('registerButton')}
                    </Text>
                </Button>
            </View>

            {/* Divider */}
            <View className="flex-row items-center my-4">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 text-sm text-gray-500 font-medium">
                    {t('orDivider')}
                </Text>
                <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Social Register Buttons */}
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

            {/* Sign In Link */}
            <View className="flex-row justify-center items-center mt-6 mb-4">
                <Text className="text-gray-600 text-base">
                    {t('haveAccount')}{' '}
                </Text>
                <Link href="/(auth)/login" asChild>
                    <Pressable className="py-1">
                        <Text className="text-[#3569ed] font-bold text-base">
                            {t('signInNow')}
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}
