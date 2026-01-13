import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import Media from "@/src/components/ui/Media";
import { Product } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";
import { MediaType } from "@/src/types";
import { formatPrice } from "@/src/utils/formatPrice";
import { FlatList } from "react-native";
import { style } from "./ProductCarousel.style";

interface ProductCarouselProps {
    data:Product[];
}


export default function ProductCarousel({data}:ProductCarouselProps) {
    const { locale } = useLocale();
    return (
        <ThemedView style={style.ctn}>
            <FlatList 
            data={data}
            renderItem={({item}) => (
                <ThemedView style={style.item}>
                    <ThemedView style={style.imageContainer}>
                        <Media 
                            resource={item.meta?.image as MediaType} 
                            sizes="small"
                            contentFit="cover"
                            style={style.image}
                        />
                    </ThemedView>
                    <ThemedText style={style.title} numberOfLines={1}>{item.title}</ThemedText>
                   {formatPrice(item) && <ThemedText style={style.price}>{formatPrice(item,locale)}</ThemedText>}
                </ThemedView>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.contentContainer}
            ItemSeparatorComponent={() => <ThemedView style={{width: 15}} />}
            style={style.flatList}
            />
        </ThemedView>
    )
}
