import { useLocale } from "@/src/provider/localeProvider";
import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ThemedIcon } from "../themed-icon";
import HighlightContent from "./HighlightContent";

interface SearchResultProps {
    data: any[];
    keyword: string;
}

export  function SearchResult({ data, keyword }: SearchResultProps) {
    const { locale } = useLocale();
    const router = useRouter();

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity 
            onPress={() => router.push(`/(posts)${item.url}`)}
            className="flex-row items-center mb-3"
        >
            {item.thumbnail ? (
                <Image
                source={{ uri: item.thumbnail }}
                className="w-1/3 h-auto aspect-video rounded-md mr-3 bg-gray-200"
                />
            ): (
                <View className="w-1/3 h-auto aspect-video rounded-md mr-3 bg-gray-200 justify-center items-center">
                    <ThemedIcon name="image" size={40} color="gray" />
                </View>
            )}
            <View className="flex-1">
                <HighlightContent
                    text={item.title}
                    keyword={keyword}
                    locale={locale}
                    />
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
            className="flex-col"
        />
    );
}

export function SearchLoading() {
    return (
        <View className="flex-1 justify-center items-center py-10">
            <ActivityIndicator size="large" />
        </View>
    );
}

export function SearchError() {
    return (
        <View className="flex-1 justify-center items-center py-10 gap-4">
            <ThemedIcon name="alert-circle" size={40} color="red" />
            <Text className="text-red-500">Something went wrong</Text>
        </View>
    );
}

export function SearchNoResult({ keyword }: { keyword: string }) {
    return (
        <View className="flex-1 justify-center items-center py-10 gap-4">
            <ThemedIcon name="search" size={50} color="gray" />
            <Text className="text-center text-lg font-medium text-gray-500">
                No results found for "{keyword}"
            </Text>
        </View>
    );
}