import { Media as MediaType } from "@/src/payload-types";
import { View, useColorScheme } from "react-native";
import Media from "../ui/Media";
import { styles } from "./PostHeader.styles";

export default function PostHeader({image}:{image:MediaType})  {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#1f2937' : '#e5e7eb'; // gray-800 : gray-200

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Media
            resource={image}
            sizes="large"
            style={{
                width:'100%',
                height:'100%',
                
            }}
            contentPosition={{
                top: `${image.focalY ?? 50}%`,
                left: `${image.focalX ?? 50}%`,
            }}
            contentFit="cover"
            />
        
        </View>
    )
}