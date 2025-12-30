import { Post } from "@/src/payload-types";
import { cn } from "@/src/utils/cn";
import { View } from "react-native";
import { ThemedText } from "../themed-text";
import Media from "../ui/Media";



interface PostCardProps {
    data:Post
    type: 'vertical' | 'horizontal' | 'horizontal-reverse'
}

export default function PostCard({data,type}:PostCardProps) {
    const {title,description,image} = data

    return (
        <View className={cn(
            "flex-row gap-2 p-2",
            type === 'horizontal' && 'flex-row',
            type === 'horizontal-reverse' && 'flex-row-reverse'
            )}>
            <View className="flex-2 p-2 bg-yellow-400">
                <ThemedText type="h3">
                   {title}
                </ThemedText>
                <ThemedText 
                    type="small" 
                    numberOfLines={2} 
                    ellipsizeMode="tail" 
                    style={{ marginTop: 4, color: '#666', lineHeight: 18 }}
                >
                    {description}
                </ThemedText>
            </View>
            <View className="flex-1 bg-red-400 aspect-square">
                <Media resource={image} sizes="large" className="w-full h-full"/>
            </View>
        </View>
    )
}