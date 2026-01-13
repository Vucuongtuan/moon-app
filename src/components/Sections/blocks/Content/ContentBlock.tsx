import { LexicalRenderer } from "@/src/components/LexicalRenderer";
import { LexicalRoot } from "@/src/components/LexicalRenderer/types";
import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { useLocale } from "@/src/provider/localeProvider";
import { Block } from "@/src/types";
import { styles } from "./ContentBlock.styles";



interface COntentBlockProps extends Block {
    title:string,
    title_en:string,
    description:string,
    description_en:string,
    content:LexicalRoot,
    content_en:LexicalRoot,
}


export default function ContentBlock(props:COntentBlockProps) {
    const {content,content_en,title,title_en,description,description_en} = props
    const {locale} = useLocale()
    const isVN = locale === 'vi'
    return (
        <ThemedView style={styles.ctn}>
            <ThemedText type="title" style={styles.title}>{isVN ? title : title_en}</ThemedText>
            <ThemedText type="subtitle">{isVN ? description : description_en}</ThemedText>
            <LexicalRenderer json={isVN ? content : content_en} />
        </ThemedView>
    )
}