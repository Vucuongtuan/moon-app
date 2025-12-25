import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';

export default function CartScreen() {
    return (
        <ThemedView className="flex-1 p-5 items-center justify-center">
            <ThemedText type="title">Shopping Cart</ThemedText>
            <ThemedText className="mt-2 text-center opacity-70">
                Your cart is empty
            </ThemedText>
            {/* TODO: Implement cart functionality */}
        </ThemedView>
    );
}
