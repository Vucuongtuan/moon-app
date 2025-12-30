import { Media as MediaType } from "@/src/payload-types";
import { View } from "react-native";
import Media from "../ui/Media";




export default function PostHeader({image}:{image:MediaType})  {
    return (
        <View className="w-full h-auto aspect-video bg-gray-200 dark:bg-gray-800">
            <Media
            resource={image}
            sizes="large"
            style={{
                width:'100%',
                height:'100%',
            }}
            contentFit="cover"
            />
        
        </View>
    )
}