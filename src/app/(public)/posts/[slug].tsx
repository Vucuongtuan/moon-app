import NotFoundScreen from "@/src/app/+not-found";
import { LexicalRenderer } from "@/src/components/LexicalRenderer";
import ParallaxScrollView from "@/src/components/parallax-scroll-view";
import MetaTitle from "@/src/components/Posts/MetaTitle";
import PostHeader from "@/src/components/Posts/PostHeader";
import { ThemedIcon } from "@/src/components/themed-icon";
import { ThemedView } from "@/src/components/themed-view";
import { Media } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";
import { findPostBySlug } from "@/src/service/graphQL/posts";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./[slug].styles";

export default function PostDetailScreen() {
    const { slug } = useLocalSearchParams();
    const { locale } = useLocale();
    const router = useRouter();
    const slugStr = Array.isArray(slug) ? slug[0] : slug;

    const { data } = useQuery({
        queryKey: ['post', slugStr],
        queryFn: async () => await findPostBySlug(slugStr || '', locale),
        enabled: !!slugStr,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });

    if (!slugStr) return <NotFoundScreen />;

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
