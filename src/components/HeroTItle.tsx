import { View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Text } from "./ui/Text";
import { styles } from "./HeroTItle.styles";

interface Props {
    title: string,
    description?: string,
    isAnimated?: boolean,
    delay?: number,
}

export default function HeroTitle(props: Props) {
    const { title, description, isAnimated = false, delay = 400 } = props
    return (
        <View style={styles.ctn}>
            {
                isAnimated ? (
                    <Animated.View entering={FadeIn.delay(delay)}>
                        <Text variant={'h1'} style={styles.titleTxt}>
                            {title}
                        </Text>
                    </Animated.View>
                ) : (
                    <Text variant={'h1'} style={styles.titleTxt}>
                        {title}
                    </Text>
                )
            }
            {description && (
                <>
                    {isAnimated ? (
                        <Animated.View entering={FadeIn.delay(delay + 200)}>
                            <Text variant={'p'} style={styles.descTxt}>
                                {description}
                            </Text>
                        </Animated.View>
                    ) : (
                        <Text variant={'p'} style={styles.descTxt}>
                            {description}
                        </Text>
                    )}
                </>
            )}

        </View>
    );
}