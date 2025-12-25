import { useLocale } from "@/src/provider/localeProvider";
import { cn } from "@/src/utils/cn";
import { Pressable, Text, View } from "react-native";





export default function SelectLang() {
    const { locale, changeLang } = useLocale();

    return (
        <View className="w-full flex-col gap-4 " >
            <View className={
                cn(
                    'flex-row gap-4 items-center justify-center ',
                )
            }>
                <Pressable key={'vi'} onPress={() => changeLang('vi')} className={cn(
                    "flex-1 items-center justify-center py-3 rounded-4xl",
                    locale === 'vi' && 'bg-[#ff8c42] text-white'
                )} disabled={locale === 'vi'}>
                    <Text className="text-xl font-semibold">Tiếng Việt</Text>
                </Pressable>
                <Pressable key={'en'} onPress={() => changeLang('en')} className={cn(
                    "flex-1 items-center justify-center py-3 rounded-4xl",
                    locale === 'en' && 'bg-[#ff8c42] text-white'
                )} disabled={locale === 'en'}>
                    <Text className="text-xl font-semibold">English</Text>
                </Pressable>
            </View>
        </View >
    );
}