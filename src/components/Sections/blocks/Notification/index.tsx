import { ThemedText } from "@/src/components/themed-text";
import { ThemedView } from "@/src/components/themed-view";
import { useLocale } from "@/src/provider/localeProvider";
import { Block } from "@/src/types";



interface NotificationBlockProps extends Block {
    title:string,
    title_en:string,
    description:string,
    description_en:string,
    media:Record<string,any>
}

export default function NotificationBlock(props:NotificationBlockProps) {
    const {title,title_en,description,description_en,media} = props
    const {locale} = useLocale()
    const isVN = locale === 'vi'
    return (
        <ThemedView>
            <ThemedText type="title" className="text-2xl font-semibold">{isVN ? title : title_en}</ThemedText>
            <ThemedText>{isVN ? description : description_en}</ThemedText>
        </ThemedView>
    )
}