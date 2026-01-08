import { useThemeColor } from "@/src/hooks/use-theme-color";
import { TextStyle, View } from "react-native";
import { ThemedIcon } from "../themed-icon";
import { ThemedText } from "../themed-text";
import { styles } from "./PublishedTime.styles";

interface PublishedTimeProps {
    date: string;
    disableIcon?:boolean
    style?: TextStyle;
}

export default function PublishedTime({date,disableIcon=false,style}:PublishedTimeProps) {
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
        <View style={styles.container} >
           {!disableIcon && <ThemedIcon name="calendar-outline" size={15} color={theme} />}
            <ThemedText type="xsmall" style={{ color: theme, opacity: 0.8, fontSize: 12 ,marginTop:2}}>
                {formatDate(date)}
            </ThemedText>
        </View>
    )
} 

