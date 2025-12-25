import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';

export default function ProfileScreen() {
    return (
        <ThemedView style={{flex:1, padding:20, alignItems:'center', justifyContent:'center'}}>
            <ThemedText type="title">Profile</ThemedText>
            <ThemedText className="mt-2 text-center opacity-70">
                Manage your account
            </ThemedText>
            {/* TODO: Implement profile functionality */}
        </ThemedView>
    );
}
