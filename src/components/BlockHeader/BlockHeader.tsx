import { useThemeColor } from "@/src/hooks/use-theme-color";
import { Text, View } from "react-native";
import { styles } from "./block-header.style";

interface Props {
    title:string,
    desc?:string,
}


export default function BlockHeader({
    title,
    desc,
}:Props) {
    const descTheme = useThemeColor({},'textSecondary')
    const theme = useThemeColor({},'text')
    return (
        <View style={styles.ctn}>
                <Text style={[styles.title,{color:theme}]}>{title}</Text>
                {desc && <Text style={[styles.desc,{color:descTheme}]}>{desc}</Text>}
        </View>
    );
}