import { LexicalRenderer } from "@/src/components/LexicalRenderer";
import { MobileRichTextProps } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";




export default function RichText(props:MobileRichTextProps){
    const {content,content_en} = props
    const {locale} = useLocale()
    return (
        <LexicalRenderer json={locale === 'vi' ? content : content_en as any}/>
    )
}