import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";
import { Modal, SafeAreaView, TouchableOpacity, useColorScheme, View } from 'react-native';
import { ThemedIcon } from "../themed-icon";
import { ThemedView } from "../themed-view";
import { Input } from "../ui/Input";
import FlashSearch from './FlashSearch';

export function SearchModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const theme = useColorScheme();
    const isDark = theme === 'dark';

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setKeyword(""); 
        }
    };

    return (
        <>
            <TouchableOpacity onPress={toggleModal}>
                <Feather name="search" size={24} color={isDark ? 'white' : 'black'} />
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isOpen}
                onRequestClose={toggleModal}
                statusBarTranslucent={true}
            >
                <ThemedView style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View className="flex-row items-center px-4 py-2 gap-3 border-b border-gray-200 dark:border-gray-800">
                            <TouchableOpacity onPress={toggleModal}>
                                <ThemedIcon name="arrow-back" size={24} color={isDark ? 'white' : 'black'} />
                            </TouchableOpacity>
                            <View className="flex-1">
                                <Input
                                    value={keyword}
                                    onChangeText={setKeyword}
                                    placeholder="Search..."
                                    autoFocus
                                    className="bg-gray-100 dark:bg-gray-800 border-none"
                                />
                            </View>
                            {keyword.length > 0 && (
                                <TouchableOpacity onPress={() => setKeyword("")}>
                                    <ThemedIcon name="close" size={20} color="gray" />
                                </TouchableOpacity>
                            )}
                        </View>

                        <FlashSearch keyword={keyword} />
                    </SafeAreaView>
                </ThemedView>
            </Modal>
        </>
    );
}

export function OpenSearchModel() {
    return <SearchModal />;
}

