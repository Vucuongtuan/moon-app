import { useLocale } from "@/src/provider/localeProvider";
import { Pressable, Text, View } from "react-native";
import { styles } from "./SelectLang.styles";

export default function SelectLang() {
    const { locale, changeLang } = useLocale();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable 
                    key={'vi'} 
                    onPress={() => changeLang('vi')} 
                    style={[
                        styles.button,
                        locale === 'vi' && styles.buttonSelected
                    ]}
                    disabled={locale === 'vi'}
                >
                    <Text style={[
                        styles.text,
                        locale === 'vi' && styles.textSelected
                    ]}>
                        Tiếng Việt
                    </Text>
                </Pressable>
                <Pressable 
                    key={'en'} 
                    onPress={() => changeLang('en')} 
                    style={[
                        styles.button,
                        locale === 'en' && styles.buttonSelected
                    ]}
                    disabled={locale === 'en'}
                >
                    <Text style={[
                        styles.text,
                        locale === 'en' && styles.textSelected
                    ]}>
                        English
                    </Text>
                </Pressable>
            </View>
        </View >
    );
}