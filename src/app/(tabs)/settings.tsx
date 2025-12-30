import HeaderSection from '@/src/components/Header/HeaderSection';
import { ThemedView } from '@/src/components/themed-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    const insets = useSafeAreaInsets();
    return (
        <ThemedView style={{flex:1, paddingTop: insets.top, paddingHorizontal:20}}>
            {/* TODO: Implement profile functionality */}
           <HeaderSection />
        </ThemedView>
    );
}
