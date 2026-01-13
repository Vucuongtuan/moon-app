import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import Media from "@/src/components/ui/Media";
import { MobileFeatureMediaProps } from "@/src/payload-types";
import { MediaType } from "@/src/types";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { View } from "react-native";
import { FeatureMediaStyle as style } from "./FeatureMedia.style";

export default function FeatureMedia(props:MobileFeatureMediaProps){
   const {image,enableText,title,link} = props

    return (
        <ThemedView style={style.ctn}>
            <View style={style.imgCtn}>
                <Media resource={image as MediaType} type="image"  sizes="large" style={style.image}/>
                <LinearGradient 
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={style.textCtn}
                >
                    {(() => {
                        const content = enableText && title && (
                            <ThemedText type="h2" style={style.title}>
                                {title}
                            </ThemedText>
                        );
                        return link ? <Link href={link as any}>{content}</Link> : content;
                    })()}
                </LinearGradient>
            </View>
        </ThemedView>
    )
}