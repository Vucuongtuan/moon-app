import { useThemeColor } from "@/src/hooks/use-theme-color";
import { Post } from "@/src/payload-types";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { ThemedText } from "../themed-text";
import Media from "../ui/Media";
import { styles } from "./PostCard.styles";
import PublishedTime from "./PublishedTime";



interface PostCardProps {
    data:Post
    type: 'vertical' | 'horizontal' | 'horizontal-reverse'
}

export default function PostCard({data,type}:PostCardProps) {
    const {title,description,image,updatedAt,slug} = data
    const secondary = useThemeColor({},'subSecondary')
    return (
        <Link href={{
            pathname: '/[type]/[slug]',
            params: { type: 'posts' as string, slug: slug as string }
        }}
        asChild
       >
        <Pressable style={styles.ctn}>
            <View style={styles.contentCtn}>
                <ThemedText type="h3">
                   {title || 'None'}
                </ThemedText>
                <ThemedText 
                    type="small" 
                    numberOfLines={2} 
                    ellipsizeMode="tail" 
                    style={[styles.descTxt, { color: secondary }]}
                    >
                    {description}
                </ThemedText>
                <PublishedTime date={updatedAt}/>
            </View>
            <View style={styles.imageCtn}>
                <Media resource={image} type="image" sizes="large" style={styles.image}/>
            </View>
                </Pressable>
        </Link>
    )
}