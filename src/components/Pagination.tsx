import React from 'react';
import { View } from 'react-native';
import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { Colors } from '../constants/theme';
import { styles } from './Pagination.styles';

interface PaginationProps {
    data: any[];
    scrollX: SharedValue<number>;
    screenWidth: number;
}

export const Pagination: React.FC<PaginationProps> = ({
    data,
    scrollX,
    screenWidth,
}) => {
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const animatedDotStyle = useAnimatedStyle(() => {
                    const width = interpolate(
                        scrollX.value,
                        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
                        [8, 20, 8],
                        Extrapolation.CLAMP
                    );

                    const opacity = interpolate(
                        scrollX.value,
                        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
                        [0.5, 1, 0.5],
                        Extrapolation.CLAMP
                    );

                    return {
                        width,
                        opacity,
                    };
                });

                return (
                    <Animated.View
                        key={i.toString()}
                        style={[
                            {
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: Colors.light.accent,
                                marginHorizontal: 4,
                            },
                            animatedDotStyle,
                        ]}
                    />
                );
            })}
        </View>
    );
};
