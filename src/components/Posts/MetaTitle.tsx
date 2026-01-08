import { useThemeColor } from '@/src/hooks/use-theme-color';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, useColorScheme, ViewProps } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedText, TypeText } from "../themed-text";
import { ThemedView } from "../themed-view";
import PublishedTime from './PublishedTime';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export interface MetaItem {
  value: string;
  type?: TypeText;
  style?: StyleProp<TextStyle>;
}

interface MetaTitleProps extends ViewProps {
  title: MetaItem;
  desc?: MetaItem;
  dateTime?: MetaItem;
  stickyScrollY?: SharedValue<number>;
}

export default function MetaTitle({ title, desc, dateTime, style, stickyScrollY, ...rest }: MetaTitleProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const flatStyle = StyleSheet.flatten(style) || {};
  const paddingVertical = (flatStyle.paddingVertical as number) ?? 8;
  const paddingTop = (flatStyle.paddingTop as number) ?? paddingVertical;
  const paddingBottom = (flatStyle.paddingBottom as number) ?? paddingVertical;

  const containerAnimatedStyle = useAnimatedStyle(() => {
    if (!stickyScrollY) return {};

    const STICKY_THRESHOLD = 50;
    
    const shadowOpacity = interpolate(
      stickyScrollY.value,
      [STICKY_THRESHOLD - 10, STICKY_THRESHOLD],
      [0, 0.1],
      Extrapolation.CLAMP
    );

    const elevation = interpolate(
      stickyScrollY.value,
      [STICKY_THRESHOLD - 10, STICKY_THRESHOLD],
      [0, 3],
      Extrapolation.CLAMP
    );

    return {
      shadowOpacity,
      elevation,
    };
  });

  // Animated style for Blur View
  const blurViewAnimatedStyle = useAnimatedStyle(() => {
    if (!stickyScrollY) return { opacity: 0 };
    const STICKY_THRESHOLD = 50;
    const opacity = interpolate(
        stickyScrollY.value,
        [0, STICKY_THRESHOLD],
        [0, 1], // Fade in blur
        Extrapolation.CLAMP
    );
    return { opacity };
  });

  // Animated style for Solid Background View
  const bgSolidAnimatedStyle = useAnimatedStyle(() => {
    if (!stickyScrollY) return { opacity: 1 };
    const STICKY_THRESHOLD = 50;
    const opacity = interpolate(
        stickyScrollY.value,
        [0, STICKY_THRESHOLD], 
        [1, 0.85], 
        Extrapolation.CLAMP
    );
    return { opacity };
  });

  const descAnimatedStyle = useAnimatedStyle(() => {
    if (!stickyScrollY) return {};

    const STICKY_THRESHOLD = 50;

    const opacity = interpolate(
      stickyScrollY.value,
      [0, STICKY_THRESHOLD - 20],
      [1, 0],
      Extrapolation.CLAMP
    );

    const maxHeight = interpolate(
      stickyScrollY.value,
      [0, STICKY_THRESHOLD],
      [30, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      maxHeight,
    };
  });

  const containerBaseStyle = {
    paddingHorizontal: 16,
    paddingTop: stickyScrollY ? paddingTop + insets.top : paddingTop, 
    paddingBottom: paddingBottom,
    backgroundColor: 'transparent', 
    marginTop: 0,
    zIndex: 10,
    overflow: 'hidden' as const, // Ensure valid type
  };



  if (!stickyScrollY) {
    return (
      <ThemedView style={[{ paddingHorizontal: 16, paddingVertical: 8 }, style]} {...rest}>
        <ThemedText 
          type={title.type || 'h2'} 
          style={title.style}
        >
          {title.value}
        </ThemedText>
        
        {desc?.value && (
          <ThemedText 
            type={desc.type || 'default'} 
            style={[{ marginTop: 2 }, desc.style]}
          >
            {desc.value}
          </ThemedText>
        )}
      </ThemedView>
    );
  }

  return (
    <Animated.View 
      style={[
        style,
        containerBaseStyle,
        containerAnimatedStyle,
      ]} 
      {...rest}
    >
      <AnimatedBlurView 
        style={[StyleSheet.absoluteFill, blurViewAnimatedStyle]}
        intensity={40}
        tint={colorScheme === 'dark' ? 'systemMaterialDark' : 'systemMaterialLight'}
      />

      <Animated.View 
        style={[
            StyleSheet.absoluteFill, 
            { backgroundColor },
            bgSolidAnimatedStyle
        ]} 
      />

      <ThemedText 
        type={title.type || 'default'} 
        style={title.style}
      >
        {title.value}
      </ThemedText>
      
      {desc?.value && (
        <Animated.View style={[{ overflow: 'hidden' }, descAnimatedStyle]}>
          <ThemedText 
            type={desc.type || 'default'} 
            style={[{ marginTop: 2 }, desc.style]}
          >
            {desc.value}
          </ThemedText>
        </Animated.View>
      )}
      {
        dateTime && dateTime.value && (
         <PublishedTime date={dateTime.value} />
        )
      }
    </Animated.View>
  );
}