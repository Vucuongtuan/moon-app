import { useLocale } from "@/src/provider/localeProvider";
import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ThemedIcon } from "../themed-icon";
import HighlightContent from "./HighlightContent";
import { styles } from "./SearchResult.styles";

interface SearchResultProps {
    data: any[];
    keyword: string;
}

export function SearchResult({ data, keyword }: SearchResultProps) {
    const { locale } = useLocale();
    const router = useRouter();

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity 
            onPress={() => router.push(`/posts${item.url}`)}            
            style={styles.itemContainer}
        >
            {item.thumbnail ? (
                <Image
                    source={{ uri: item.thumbnail }}
                    style={styles.thumbnail}
                />
            ): (
                <View style={styles.placeholderContainer}>
                    <ThemedIcon name="image" size={40} color="gray" />
                </View>
            )}
            <View style={styles.textContainer}>
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
            style={styles.list}
        />
    );
}

export function SearchLoading() {
    return (
        <View style={styles.centerContainer}>
            <ActivityIndicator size="large" />
        </View>
    );
}

export function SearchError() {
    return (
        <View style={[styles.centerContainer, styles.gapContainer]}>
            <ThemedIcon name="alert-circle" size={40} color="red" />
            <Text style={styles.errorText}>Something went wrong</Text>
        </View>
    );
}

export function SearchNoResult({ keyword }: { keyword: string }) {
    return (
        <View style={[styles.centerContainer, styles.gapContainer]}>
            <ThemedIcon name="search" size={50} color="gray" />
            <Text style={styles.noResultText}>
                No results found for "{keyword}"
            </Text>
        </View>
    );
}