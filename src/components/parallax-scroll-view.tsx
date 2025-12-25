import type { PropsWithChildren, ReactElement } from 'react';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/src/components/themed-view';
import { useColorScheme } from '@/src/hooks/use-color-scheme';

const HEADER_HEIGHT = 550;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  themeViewClass?: string;
  headerHeight?: number
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  themeViewClass,
  headerHeight = HEADER_HEIGHT
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [-headerHeight / 2, 0, headerHeight * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-headerHeight, 0, headerHeight], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      className="flex-1 "
      scrollEventThrottle={16}>
      <Animated.View
        style={[{
          height: headerHeight,
          overflow: 'hidden'
        }, headerAnimatedStyle]}>
        {headerImage}
      </Animated.View>
      <ThemedView className={themeViewClass}>{children}</ThemedView>
    </Animated.ScrollView>
  );
}
