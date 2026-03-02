import NotFoundScreen from "@/src/app/+not-found";
import RenderContent from "@/src/components/RIchText/RenderContent";
import { useLocale } from "@/src/provider/localeProvider";
import { findPageBySlug } from "@/src/service/rest/pages";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./[slug].styles";

const pageWhiteList = ['about', 'contact', 'privacy-policy', 'terms'];

export default function PageDetailScreen() {
    const { slug } = useLocalSearchParams();
    const { locale } = useLocale();
    const slugStr = Array.isArray(slug) ? slug[0] : slug;

    const isValid = slugStr && pageWhiteList.includes(slugStr);

    const { data, isFetching } = useQuery({
        queryKey: ['page', slugStr],
        queryFn: async () => await findPageBySlug(slugStr || '', locale),
        enabled: !!isValid,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });

    if (!isValid) return <NotFoundScreen />;

    const contentHTML = data?.sections?.columns
        ?.map((col: any) => col.richText)
        .join('') || '';

    return (
        <View style={styles.ctn}>
            <Stack.Screen
                options={{
                    title: slugStr || 'Page',
                    headerTitle: slugStr?.toUpperCase(),
                    headerTitleAlign: 'center'
                }}
            />

            {isFetching && (
                <View style={styles.pageLoadingCtn}>
                    <ActivityIndicator />
                    <Text>Đang tải...</Text>
                </View>
            )}

            {data && (
                <View style={styles.pageContentCtn}>
                    <RenderContent html={contentHTML} />
                </View>
            )}

            {!isFetching && !data && (
                <View style={styles.pageErrorCtn}>
                    <Text style={styles.pageErrorTxt}>
                        Không tìm thấy trang hoặc lỗi khi tải dữ liệu.
                    </Text>
                </View>
            )}
        </View>
    );
}
