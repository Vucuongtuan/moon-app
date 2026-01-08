import { View, useColorScheme } from "react-native";
import { ThemedText } from "../../themed-text";
import Media from "../../ui/Media";
import { LexicalNode } from "../types";
import { styles } from "./UploadNode.styles";

export const UploadNode = ({node}:{
    node:LexicalNode
}) => {
    const value = node.value;
    const colorScheme = useColorScheme();
    const captionColor = colorScheme === 'dark' ? 'white' : 'black';

    if(!value) return null;
  return (
    <View style={styles.container}>
        <Media resource={value} type={value?.mimeType?.startsWith('video/') ? 'video' : 'image'} sizes={'large'}  style={styles.media} />
        {value.caption && <ThemedText style={[styles.caption, { color: captionColor }]}>{value.caption}</ThemedText>}
    </View>
  )
}