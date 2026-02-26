import { ThemedView } from "@/src/components/themed-view";
import { useTranslations } from "@/src/hooks/useTranslations";
import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./auth.styles";

export default function AuthLayout() {
    const { t } = useTranslations('auth')
    return (
        <ThemedView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Slot />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {t('titlePrivate')}
                    {" "}
                    <Link href="/terms">
                        <Text style={styles.linkText}>
                            {t('terms')}
                        </Text>
                    </Link>
                    {" "}
                    {t('and')}
                    {" "}
                    <Link href="/privacy-policy">
                        <Text style={styles.linkText}>
                            {t('privacyPolicy')}
                        </Text>
                    </Link>
                </Text>
            </View >
        </ThemedView >
    )
}