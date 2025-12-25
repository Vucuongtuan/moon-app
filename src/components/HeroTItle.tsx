import { View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Text } from "./ui/Text";

interface Props {
    title: string,
    description?: string,
    isAnimated?: boolean,
    delay?: number,
}

export default function HeroTitle(props: Props) {
    const { title, description, isAnimated = false, delay = 400 } = props
    return (
        <View className="py-12">
            {
                isAnimated ? (
                    <Animated.View entering={FadeIn.delay(delay)}>
                        <Text variant={'h1'} className="text-center text-6xl">
                            {title}
                        </Text>
                    </Animated.View>
                ) : (
                    <Text variant={'h1'} className="text-center text-6xl">
                        {title}
                    </Text>
                )
            }
            {description && (
                <>
                    {isAnimated ? (
                        <Animated.View entering={FadeIn.delay(delay + 200)}>
                            <Text variant={'p'} className="text-left text-2xl text-gray-500 mt-4">
                                {description}
                            </Text>
                        </Animated.View>
                    ) : (
                        <Text variant={'p'} className="text-left text-2xl text-gray-500 mt-4">
                            {description}
                        </Text>
                    )}
                </>
            )}

        </View>
    );
}