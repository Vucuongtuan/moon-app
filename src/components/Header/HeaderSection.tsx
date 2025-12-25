import { useTranslations } from "@/src/hooks/useTranslations";
import { View } from "react-native";
import { ThemedText } from "../themed-text";

import useAuth from "@/src/stores/auth";
import Feather from '@expo/vector-icons/Feather';





export default function HeaderSection() {
   const {t} = useTranslations("header");
   const {user} = useAuth()
    return (
        <View className="h-32 w-full flex-row items-center px-6">
            <View className="flex-1">
                <ThemedText type="title">{t("hi")} {user?.name}</ThemedText>
            </View>
            <View className="flex-1 items-end">
               <Feather name="search" size={24}  />
            </View>
        </View>
    )
}
    