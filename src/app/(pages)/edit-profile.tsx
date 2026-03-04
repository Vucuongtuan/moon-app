import { EditProfileForm } from '@/src/components/Form';
import { ThemedView } from '@/src/components/themed-view';
import { StyleSheet } from 'react-native';

export default function EditProfileScreen() {
    return (
        <ThemedView style={styles.container}>
            <EditProfileForm />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
