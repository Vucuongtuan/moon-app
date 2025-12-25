import { View } from "react-native";
import { ThemedText } from "../../themed-text";
import Media from "../../ui/Media";
import { LexicalNode } from "../types";




export const UploadNode = ({node}:{
    node:LexicalNode
}) => {
    const value = node.value;
    if(!value) return null;
  return (
    <View className="py-4 flex-1 -ml-6 -mr-6">
        <Media resource={value} type={value?.mimeType?.startsWith('video/') ? 'video' : 'image'} sizes={'large'}  style={{width: '100%', height: "auto" , minHeight:300 ,maxHeight:600,paddingHorizontal:2}} />
        {value.caption && <ThemedText className="text-center text-black dark:text-white">{value.caption}</ThemedText>}
    </View>
  )
}