import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/src/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:TypeText ;
};
export type TypeText = 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'h2' | 'h3' | 'small' | 'xsmall'

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'h2' ? styles.h2 :undefined,
        type === 'h3' ? styles.h3 :undefined,
        type === 'small' ? styles.small :undefined,
        type === 'xsmall' ? styles.xsmall :undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  xsmall:{
    fontSize: 12,
    lineHeight: 12,
  },
   small:{
    fontSize: 14,
    lineHeight: 14,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  h2 :{
    fontSize: 20,
    fontWeight:'bold',
    lineHeight: 20,
  },
  h3:{
    fontSize: 18,
    fontWeight:'bold',
    lineHeight: 24,
  }
});
