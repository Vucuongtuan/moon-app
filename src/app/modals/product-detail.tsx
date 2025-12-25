import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { Link } from 'expo-router';

export default function ProductDetailModal() {
    return (
        <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <ThemedText type="title">Product Detail</ThemedText>
            <ThemedText className="mt-2 text-center opacity-70">
                This modal will show product details
            </ThemedText>
            <Link href="/" dismissTo className="mt-4 py-4">
                <ThemedText type="link">Close</ThemedText>
            </Link>
        </ThemedView>
    );
}
