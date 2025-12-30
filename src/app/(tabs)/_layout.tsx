import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { useMemo } from 'react';
import { DynamicColorIOS, Platform, useColorScheme } from 'react-native';

export default function TabsLayout() {
    const colorSchema = useColorScheme();

    const dynamicColor = Platform.OS === 'ios' ? DynamicColorIOS({
        dark: "white",
        light: 'black'
    }) : colorSchema === 'dark' ? "white" : "black";
    const isDark = useMemo(() => colorSchema === 'dark', [colorSchema]);

    return (
        <NativeTabs
            labelStyle={{
                color: dynamicColor
            }}
            tintColor={dynamicColor}
            backgroundColor={isDark ? 'black' : 'white'}
            blurEffect='systemDefault'
        >
            <NativeTabs.Trigger name="index">
                <Label>Home</Label>
                <Icon sf="house.fill" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="posts/index"  options={{
                blurEffect: 'systemDefault'
            }}>
                <Label>Posts</Label>
                <Icon sf="doc.text" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="cart">
                <Label>Cart</Label>
                <Icon sf="cart" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
          
            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                <Icon sf="person.fill" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="search" role="search">
                <Label>Search</Label>
                <Icon sf="magnifyingglass" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
        </ NativeTabs>
    )
}
