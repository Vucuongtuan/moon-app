import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { cn } from '../utils/cn';
import { Text } from './ui/Text';

interface LanguageSelectorProps {
    selectedLanguage: 'vi' | 'en';
    onSelectLanguage: (lang: 'vi' | 'en') => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    selectedLanguage,
    onSelectLanguage,
}) => {
    return (
        <View className="flex-row gap-4 mt-4">
            <TouchableOpacity
                onPress={() => onSelectLanguage('vi')}
                className={cn(
                    "px-6 py-3 rounded-full border",
                    selectedLanguage === 'vi'
                        ? "bg-accent border-accent"
                        : "bg-transparent border-secondary"
                )}
            >
                <Text className={cn(
                    selectedLanguage === 'vi' ? "text-white" : "text-secondary"
                )}>
                    Tiếng Việt 🇻🇳
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onSelectLanguage('en')}
                className={cn(
                    "px-6 py-3 rounded-full border",
                    selectedLanguage === 'en'
                        ? "bg-accent border-accent"
                        : "bg-transparent border-secondary"
                )}
            >
                <Text className={cn(
                    selectedLanguage === 'en' ? "text-white" : "text-secondary"
                )}>
                    English 🇬🇧
                </Text>
            </TouchableOpacity>
        </View>
    );
};
