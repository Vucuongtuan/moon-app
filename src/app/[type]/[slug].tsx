import NotFoundScreen from "@/src/app/+not-found";
import { LexicalRenderer } from "@/src/components/LexicalRenderer";
import ParallaxScrollView from "@/src/components/parallax-scroll-view";
import MetaTitle from "@/src/components/Posts/MetaTitle";
import PostHeader from "@/src/components/Posts/PostHeader";
import RenderContent from "@/src/components/RIchText/RenderContent";
import { ThemedIcon } from "@/src/components/themed-icon";
import { ThemedView } from "@/src/components/themed-view";
import { Media } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";
import { findPostBySlug } from "@/src/service/graphQL/posts";
import { findPageBySlug } from "@/src/service/rest/pages";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { styles } from "./[slug].styles";

const pageWhiteList = ['about', 'contact', 'privacy-policy', 'terms'];

export default function DynamicContentScreen() {
    const { type, slug } = useLocalSearchParams();
    const { locale } = useLocale();
    const router = useRouter();
    const colorScheme = useColorScheme();
    const slugStr = Array.isArray(slug) ? slug[0] : slug;

    if (type === 'posts') {
        if (!slugStr) return <NotFoundScreen />;

        const { data, isFetching } = useQuery({
            queryKey: ['post', slugStr],
            queryFn: async () => await findPostBySlug(slugStr, locale),
            staleTime: 1000 * 60 * 60 * 24,
            gcTime: 1000 * 60 * 60 * 24,
        });

        const media = data?.image as Media;

        return (
            <ThemedView style={styles.ctn}>
                <Stack.Screen
                    options={{
                        title: 'Post Details',
                        headerTitle: '',
                        headerTransparent: true,
                        headerBackVisible: false,
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => router.back()}
                                style={{
                                    padding:4,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <ThemedIcon name="chevron-back" size={24} />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <ParallaxScrollView
                headerImage={<PostHeader image={media} />}
                headerHeight={470}
                >
                    <MetaTitle title={{value:data?.title,type:'title',style:{textAlign:'center'}}} desc={{value:data?.description,type:'default',style:{textAlign:'center'}}} 
                    dateTime={{value:data?.publishedAt || data?.createdAt || data?.updatedAt,type:'default',style:{textAlign:'center'}}}
                    style={{paddingVertical:0 ,paddingHorizontal:22,gap:8 }} />
                    <LexicalRenderer json={data?.content} />
            </ParallaxScrollView>
            </ThemedView>
        );
    }

    // --- LOGIC FOR PAGES ---
    if (type === 'page') {
        if (!slugStr || !pageWhiteList.includes(slugStr)) return <NotFoundScreen />;

        const { data, isFetching } = useQuery({
            queryKey: ['page', slugStr],
            queryFn: async () => await findPageBySlug(slugStr, locale),
            staleTime: 1000 * 60 * 60 * 24,
            gcTime: 1000 * 60 * 60 * 24,
        });

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
                        {/* Note: Prose styles usually need Tailwind, but RenderContent handles HTML. 
                            We keep container style basic here. */}
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

    // Invalid Type
    return <NotFoundScreen />;
}