import { useThemeColor } from "@/src/hooks/use-theme-color";
import { TextStyle, View } from "react-native";
import { ThemedIcon } from "../themed-icon";
import { ThemedText } from "../themed-text";



export default function PublishedTime({date,style}:{date:string,style?:TextStyle}) {
    const theme = useThemeColor({},'subSecondary')
     const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    return (
        <View className="flex-row items-center gap-1.5 pt-2" >
           <ThemedIcon name="calendar-outline" size={15} color={theme} />
            <ThemedText type="xsmall" style={{ color: theme, opacity: 0.8, fontSize: 12 ,marginTop:2}}>
                {formatDate(date)}
            </ThemedText>
        </View>
    )
} 

