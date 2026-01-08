import React from 'react';
import { Image, ImageSourcePropType, useWindowDimensions, View } from 'react-native';
import { Text } from './ui/Text';
import { styles } from './OnboardingSlide.styles';
import { useThemeColor } from '@/src/hooks/use-theme-color';

interface OnboardingSlideProps {
    title: string;
    description: string;
    image?: ImageSourcePropType;
    children?: React.ReactNode;
}

export const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
    title,
    description,
    image,
    children,
}) => {
    const { width } = useWindowDimensions();
    const secondaryColor = useThemeColor({}, 'secondary');
    const secondaryForegroundColor = useThemeColor({}, 'secondaryForeground');

    return (
        <View style={[styles.container, { width }]}>
            {image && (
                <View style={styles.imageContainer}>
                    <Image
                        source={image}
                        style={{ width: width * 0.8, height: width * 0.8 }}
                        resizeMode="contain"
                    />
                </View>
            )}

            <View style={styles.textContainer}>
                <Text
                    variant="h2"
                    style={[styles.title, { color: secondaryColor }]}
                >
                    {title}
                </Text>
                <Text
                    style={[styles.description, { color: secondaryForegroundColor }]}
                >
                    {description}
                </Text>
                {children}
            </View>
        </View>
    );
};
