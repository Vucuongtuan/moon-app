import { useThemeColor } from "@/src/hooks/use-theme-color";
import { Post } from "@/src/payload-types";
import { Link } from "expo-router";
import { View } from "react-native";
import { ThemedText } from "../themed-text";
import Media from "../ui/Media";
import PublishedTime from "./PublishedTime";



interface PostCardProps {
    data:Post
    type: 'vertical' | 'horizontal' | 'horizontal-reverse'
}

export default function PostCard({data,type}:PostCardProps) {
    const {title,description,image,updatedAt} = data
    const secondary = useThemeColor({},'subSecondary')
    console.log({image})
    return (
        <Link href={`/(posts)/${data.slug}`}
         className="bg-red-400"
       >
            <View className="flex-2 p-2 justify-between">
                <ThemedText type="h3">
                   {title}
                </ThemedText>
                <ThemedText 
                    type="small" 
                    numberOfLines={2} 
                    ellipsizeMode="tail" 
                    style={{ marginTop: 4, color: secondary, lineHeight: 18 }}
                >
                    {description}
                </ThemedText>
                <PublishedTime date={updatedAt}/>
            </View>
            <View className="flex-1 aspect-square">
                <Media resource={image} type="image" sizes="large" style={{
                    aspectRatio:1/1,
                    borderRadius:4
                }}/>
            </View>
        </Link>
    )
}