import { ThemedView } from "@/src/components/themed-view";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
    const insets = useSafeAreaInsets();
    
    return (
        <ThemedView style={{ flex: 1, paddingTop: insets.top }}>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {/* <BlockHeader 
                    title="Settings" 
                    desc="Manage your app preferences and account settings"
                /> */}
                {/* Thêm các settings options ở đây */}
            </ScrollView>
        </ThemedView>
    );
}