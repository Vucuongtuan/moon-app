import { useTranslations } from "@/src/hooks/useTranslations";
import { Post } from "@/src/payload-types";
import { useLocale } from "@/src/provider/localeProvider";
import { findPosts } from "@/src/service/graphQL/posts";
import { Lang } from "@/src/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import PostCard from "./PostCard";

interface PostListProps {
    contentContainerStyle?: any;
}

export default function PostList({ contentContainerStyle }: PostListProps) {
    const { t } = useTranslations("posts");
    const { locale } = useLocale();
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });
    
    const { data, isFetching, isError, error } = useQuery({
        queryKey: ['posts-list', locale],
        queryFn: async () => await findPosts({ locale: locale as Lang }),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        gcTime: 1000 * 60 * 60 * 24,    // 24 hours
    });


    const listData = [
        ...(data?.docs || []).map((doc: Post) => ({ type: 'post', data: doc })),
        ...(data?.docs || []).map((doc: Post) => ({ type: 'post', data: doc })),
        ...(data?.docs || []).map((doc: Post) => ({ type: 'post', data: doc })),
        ...(data?.docs || []).map((doc: Post) => ({ type: 'post', data: doc })),
    ];

    return (
        <Animated.FlatList
            data={listData}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            renderItem={({ item, index }) => {
            
                return <PostCard key={index} data={item.data} type="horizontal" />;
            }}
            keyExtractor={(item, index) => {
                if (item.type === 'header') return 'header';
                return `${item.data?.id}-${index}`;
            }}
            contentContainerStyle={[
                { gap: 12, paddingBottom: 20 },
                contentContainerStyle
            ]}
            stickyHeaderIndices={[0]} 
            // TODO: Thêm infinite scroll logic sau
            // onEndReached={loadMore}
            // onEndReachedThreshold={0.5}
            // ListFooterComponent={isFetching ? <LoadingSpinner /> : null}
        />
    );
}
