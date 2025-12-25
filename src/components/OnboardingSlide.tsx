import React from 'react';
import { Image, ImageSourcePropType, useWindowDimensions, View } from 'react-native';
import { Text } from './ui/Text';

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

    return (
        <View style={{ width }} className="flex-1 items-center justify-center px-6 pt-10 pb-20">
            {image && (
                <View className="flex-1 w-full items-center justify-center mb-8">
                    <Image
                        source={image}
                        style={{ width: width * 0.8, height: width * 0.8 }}
                        resizeMode="contain"
                    />
                </View>
            )}

            <View className="w-full items-center">
                <Text variant="h2" className="text-center mb-4 text-secondary">
                    {title}
                </Text>
                <Text className="text-center text-secondary-foreground mb-8">
                    {description}
                </Text>
                {children}
            </View>
        </View>
    );
};
