import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from './ui/Text';
import { styles } from './LanguageSelector.styles';
import { useThemeColor } from '@/src/hooks/use-theme-color';

interface LanguageSelectorProps {
    selectedLanguage: 'vi' | 'en';
    onSelectLanguage: (lang: 'vi' | 'en') => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    selectedLanguage,
    onSelectLanguage,
}) => {
    const accentColor = useThemeColor({}, 'accent');
    const secondaryColor = useThemeColor({}, 'secondary');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onSelectLanguage('vi')}
                style={[
                    styles.button,
                    selectedLanguage === 'vi'
                        ? { backgroundColor: accentColor, borderColor: accentColor }
                        : { backgroundColor: 'transparent', borderColor: secondaryColor }
                ]}
            >
                <Text style={[
                    selectedLanguage === 'vi' ? { color: 'white' } : { color: secondaryColor }
                ]}>
                    Tiếng Việt 🇻🇳
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onSelectLanguage('en')}
                style={[
                    styles.button,
                    selectedLanguage === 'en'
                        ? { backgroundColor: accentColor, borderColor: accentColor }
                        : { backgroundColor: 'transparent', borderColor: secondaryColor }
                ]}
            >
                <Text style={[
                    selectedLanguage === 'en' ? { color: 'white' } : { color: secondaryColor }
                ]}>
                    English 🇬🇧
                </Text>
            </TouchableOpacity>
        </View>
    );
};
