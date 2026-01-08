import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { Link } from 'expo-router';
import { styles } from './product-detail.styles';

export default function ProductDetailModal() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Product Detail</ThemedText>
            <ThemedText style={styles.subtitle}>
                This modal will show product details
            </ThemedText>
            <Link href="/" dismissTo style={styles.closeLink}>
                <ThemedText type="link">Close</ThemedText>
            </Link>
        </ThemedView>
    );
}
