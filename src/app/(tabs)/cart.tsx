import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { useCartStore } from '@/src/stores/cart';
import { useAuth } from '@/src/stores/auth';
import { useEffect } from 'react';
import { FlatList, View, ActivityIndicator, Alert, useColorScheme } from 'react-native';
import { Image } from 'expo-image';
import { styles } from './cart.styles';
import { Button } from '@/src/components/ui/Button';
import { Product } from '@/src/payload-types';
import { Colors } from '@/src/constants/theme';

export default function CartScreen() {
    const { user } = useAuth();
    const { cart, isLoading, initializeCart, removeFromCart, updateQuantity } = useCartStore();
    const colorScheme = useColorScheme() || 'light';
    const themeColors = Colors[colorScheme];

    useEffect(() => {
        if (user) {
            initializeCart(user.id);
        }
    }, [user, initializeCart]);

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        updateQuantity(itemId, newQuantity);
    };

    const handleRemove = (itemId: string) => {
        Alert.alert(
            "Remove Item",
            "Are you sure you want to remove this item?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Remove", style: "destructive", onPress: () => removeFromCart(itemId) }
            ]
        );
    };

    const renderItem = ({ item }: { item: any }) => {
        const product = item.product as Product;

        // Product image logic
        let imageUrl = null;
        if (product && typeof product !== 'string') {
             if (product.meta?.image && typeof product.meta.image !== 'string') {
                 imageUrl = product.meta.image.url;
             } else if (product.gallery && product.gallery.length > 0) {
                 const firstImage = product.gallery[0].image;
                 if (firstImage && !Array.isArray(firstImage) && typeof firstImage !== 'string') {
                      imageUrl = firstImage.url;
                 } else if (Array.isArray(firstImage) && firstImage.length > 0 && typeof firstImage[0] !== 'string') {
                      imageUrl = (firstImage[0] as any).url;
                 }
             }
        }

        const imageSource = imageUrl ? { uri: imageUrl } : require('@/assets/images/react-logo.png');

        return (
            <View style={[
                styles.itemContainer,
                { backgroundColor: colorScheme === 'dark' ? '#2A2A2A' : '#FFFFFF' }
            ]}>
                <Image source={imageSource} style={styles.itemImage} contentFit="cover" />
                <View style={styles.itemDetails}>
                    <ThemedText type="defaultSemiBold" numberOfLines={1}>
                        {typeof product === 'string' ? 'Product' : product.title}
                    </ThemedText>

                     <ThemedText type="small" style={{ opacity: 0.7 }}>
                        {typeof product !== 'string' && product.priceInUSD ? `$${product.priceInUSD}` : 'Price N/A'}
                     </ThemedText>

                    <View style={styles.quantityContainer}>
                        <Button size="sm" variant="outline" onPress={() => handleQuantityChange(item.id!, item.quantity - 1)}>
                            <ThemedText>-</ThemedText>
                        </Button>
                        <ThemedText style={styles.quantityText}>{item.quantity}</ThemedText>
                        <Button size="sm" variant="outline" onPress={() => handleQuantityChange(item.id!, item.quantity + 1)}>
                            <ThemedText>+</ThemedText>
                        </Button>
                        <Button size="sm" variant="ghost" onPress={() => handleRemove(item.id!)} style={styles.removeButton}>
                            <ThemedText style={{color: 'red', fontSize: 12}}>Remove</ThemedText>
                        </Button>
                    </View>
                </View>
            </View>
        );
    };

    if (!user) {
         return (
            <ThemedView style={styles.ctn}>
                <ThemedText>Please log in to view your cart.</ThemedText>
            </ThemedView>
         )
    }

    if (isLoading && !cart) {
        return (
            <ThemedView style={styles.ctn}>
                <ActivityIndicator size="large" />
            </ThemedView>
        );
    }

    if (!cart || !cart.items || cart.items.length === 0) {
        return (
            <ThemedView style={styles.ctn}>
                <ThemedText type="title">Shopping Cart</ThemedText>
                <ThemedText style={styles.emptyTxt}>Your cart is empty</ThemedText>
            </ThemedView>
        );
    }

    const subtotal = cart.items.reduce((sum, item) => {
        const product = item.product as Product;
        const price = (product && typeof product !== 'string' && product.priceInUSD) ? product.priceInUSD : 0;
        return sum + price * item.quantity;
    }, 0);

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.header}>Shopping Cart</ThemedText>
            <FlatList
                data={cart.items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id || Math.random().toString()}
                contentContainerStyle={styles.listContent}
            />
            <View style={[
                styles.footer,
                {
                    backgroundColor: themeColors.background,
                    borderTopColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }
            ]}>
                <View style={styles.totalRow}>
                    <ThemedText type="subtitle">Subtotal:</ThemedText>
                    <ThemedText type="subtitle">${subtotal.toFixed(2)}</ThemedText>
                </View>
                <Button onPress={() => Alert.alert("Checkout", "Proceed to checkout")} style={styles.checkoutButton}>
                     <ThemedText style={styles.checkoutButtonText}>Checkout</ThemedText>
                </Button>
            </View>
        </ThemedView>
    );
}
