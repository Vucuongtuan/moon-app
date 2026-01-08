import { useTranslations } from "@/src/hooks/useTranslations";
import { View } from "react-native";
import { ThemedText } from "../themed-text";
import useAuth from "@/src/stores/auth";
import Feather from '@expo/vector-icons/Feather';
import { styles } from "./HeaderSection.styles";

export default function HeaderSection() {
   const {t} = useTranslations("header");
   const {user} = useAuth()
    return (
        <View style={styles.ctn}>
            <View style={styles.leftCtn}>
                <ThemedText type="title">{t("hi")} {user?.name}</ThemedText>
            </View>
            <View style={styles.rightCtn}>
               <Feather name="search" size={24}  />
            </View>
        </View>
    )
}
    