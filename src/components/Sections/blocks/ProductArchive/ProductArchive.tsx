import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { MobileProductArchivesProps, Product } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";
import { findNewProduct } from "@/src/service/rest/product";
import { PaginationType } from "@/src/types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { style } from "./ProductArchiveBlock.style";
import ProductCarousel from "./ProductCarousel";


export default function ProductArchiveBlock(props:MobileProductArchivesProps) {
    const {title,title_en,description,description_en,productType:type,category,product,blockType} = props;
    const {locale} = useLocale();
    const isVN = locale === 'vi';



    const {data,isFetching,isError} = useQuery<PaginationType<Partial<Product>>,Error>({
        queryKey:[`${blockType}-${type}-${locale}`],
        queryFn:async() => await findNewProduct({locale})
    })
    
    if(isError || !data ) return null 
    

    const linkURLTopic = type === 'new' ? 'new' : type === 'category' ? `/t/${category}` : type === 'product' ? '' : '';
    return (
        <ThemedView style={style.ctn}>
            <View style={style.header}>
            <ThemedText type="h2" style={style.title}>{isVN ? title : title_en}</ThemedText>
                {linkURLTopic ? (
                    <Link href={linkURLTopic as any} asChild>
                        <Pressable>
                            <ThemedText style={style.seeMore}>{isVN ? 'Xem thêm' : 'See more'}</ThemedText>
                        </Pressable>
                    </Link>
                ) : null}
            </View>
            <ThemedText type="small" style={style.description}>{isVN ? description : description_en}</ThemedText>
            {data && <ProductCarousel data={data.docs as Product[]}/>}
        </ThemedView>
    )
}



