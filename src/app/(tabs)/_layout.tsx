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
            disableTransparentOnScrollEdge
        >
            <NativeTabs.Trigger name="index">
                <Label>Home</Label>
                <Icon sf="house.fill" drawable="custom_home_drawable"  />
            </NativeTabs.Trigger>
        
            <NativeTabs.Trigger name="cart">
                <Label>Cart</Label>
                <Icon sf="cart" drawable="custom_cart_drawable" selectedColor={'red'}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                <Icon sf="person.fill" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
         
        </ NativeTabs>
    )
}
