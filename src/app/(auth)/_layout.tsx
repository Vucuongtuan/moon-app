import { ThemedView } from "@/src/components/themed-view";
import { useTranslations } from "@/src/hooks/useTranslations";
import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

export default function AuthLayout() {
    const { t } = useTranslations('auth')
    return (
        <ThemedView style={{ flex: 1 }}>
            <View className="flex-1">
                <Slot />
            </View>
            <View className="py-8 px-6">
                <Text className="text-center text-gray-500 leading-6">
                    {t('titlePrivate')}
                    {" "}
                    <Link href="/terms">
                        <Text className="text-blue-600 font-medium">
                            {t('terms')}
                        </Text>
                    </Link>
                    {" "}
                    {t('and')}
                    {" "}
                    <Link href="/privacy-policy">
                        <Text className="text-blue-600 font-medium">
                            {t('privacyPolicy')}
                        </Text>
                    </Link>
                </Text>
            </View >
        </ThemedView >
    )
}