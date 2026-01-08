import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { styles } from './cart.styles';

export default function CartScreen() {
    return (
        <ThemedView style={styles.ctn}>
            <ThemedText type="title">Shopping Cart</ThemedText>
            <ThemedText style={styles.emptyTxt}>
                Your cart is empty
            </ThemedText>
            {/* TODO: Implement cart functionality */}
        </ThemedView>
    );
}
