import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";
import { Modal, SafeAreaView, TouchableOpacity, useColorScheme, View } from 'react-native';
import { ThemedIcon } from "../themed-icon";
import { ThemedView } from "../themed-view";
import { Input } from "../ui/Input";
import FlashSearch from './FlashSearch';
import { styles } from './SearchModel.styles';

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
                        <View style={[styles.headerCtn, isDark && styles.headerCtnDark]}>
                            <TouchableOpacity onPress={toggleModal}>
                                <ThemedIcon name="arrow-back" size={24} color={isDark ? 'white' : 'black'} />
                            </TouchableOpacity>
                            <View style={styles.inputWrapperCtn}>
                                <Input
                                    value={keyword}
                                    onChangeText={setKeyword}
                                    placeholder="Search..."
                                    autoFocus
                                    style={[styles.searchInput, isDark && styles.searchInputDark]}
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

