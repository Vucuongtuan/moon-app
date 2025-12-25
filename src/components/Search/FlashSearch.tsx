import { useSearchQuery } from "@/src/hooks/useSearchQuery";
import React from "react";
import { Platform } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { ThemedView } from "../themed-view";
import { SearchResult, SearchError, SearchLoading, SearchNoResult } from "./SearchResult";

interface FlashSearchProps {
    keyword: string;
}

export default function FlashSearch({ keyword }: FlashSearchProps) {
    const { data, isLoading, isError, debouncedQuery } = useSearchQuery(keyword);
 
    const renderContent = () => {
        if (!keyword) {
            return null; // Hoặc render lịch sử tìm kiếm, gợi ý...
        }

        if (isLoading) {
            return <SearchLoading />;
        }

        if (isError) {
            return <SearchError />;
        }

        if (!data || data.length === 0) {
            return <SearchNoResult keyword={debouncedQuery} />;
        }

        return <SearchResult data={data} keyword={debouncedQuery} />;
    };

    return (
        <ThemedView style={{ flex: 1 }}>
            <Animated.View
                entering={FadeInDown.duration(300)}
                exiting={FadeOutUp.duration(300)}
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : 0, // Điều chỉnh padding nếu cần, hiện tại set 0 để linh hoạt
                    
                }}

            >
                {renderContent()}
            </Animated.View>
        </ThemedView>
    );
}
