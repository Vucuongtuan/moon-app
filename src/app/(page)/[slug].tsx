import RenderContent from "@/src/components/RIchText/RenderContent";
import { useLocale } from "@/src/provider/localeProvider";
import { findPageBySlug } from "@/src/service/rest/pages";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import NotFoundScreen from "../+not-found";


const whiteList = ['about', 'contact', 'privacy-policy', 'terms'];


export default function PageScreen() {
    const { slug } = useLocalSearchParams()
    const { locale } = useLocale();

    const pageSlug = Array.isArray(slug) ? slug[0] : slug;

    if (!whiteList.includes(pageSlug)) return <NotFoundScreen />

    const { data, isFetching } = useQuery({
        queryKey: ['page', pageSlug],
        queryFn: async () => await findPageBySlug(pageSlug, locale),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        gcTime: 1000 * 60 * 60 * 24,    // 24 hours
    })
    const contentHTML = data?.sections?.columns
        ?.map((col: any) => col.richText)
        .join('') || '';
    return (
        <View
            className="flex-1"
        >
            <Stack.Screen
                options={{
                    title: (slug as string) || 'Page',
                    headerTitle: (slug as string)?.toUpperCase(),
                    headerTitleAlign: 'center'
                }}
            />
            {isFetching && (
                <View className="p-4">
                    <Text>Đang tải...</Text>
                </View>
            )}
            {data && (
                <View className="flex-1 pt-6 prose prose-2xl px-2">
                    <RenderContent html={contentHTML} />
                </View>
            )}
            {!isFetching && !data && (
                <View className="p-4">
                    <Text className="text-red-500">Không tìm thấy trang hoặc lỗi khi tải dữ liệu.</Text>
                </View>
            )}

        </View>
    )
}