import { ThemedIcon } from '@/src/components/themed-icon';
import { Link, Stack } from 'expo-router';
import { Pressable, useColorScheme, View } from 'react-native';
import { styles } from './index.styles';

export default function ProfileLayout() {
    const colorSchema = useColorScheme();
    
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: colorSchema === 'dark' ? "white" : "black",
                headerShadowVisible: false,
                headerTransparent:true,
            }}
        >
            <Stack.Screen 
                name="index"
                options={{ 
                    title: "",
                    headerShown: true,
                    headerTransparent:true,
                    headerShadowVisible:false,
                    headerRight:() => (
                        <View style={styles.header}>
                            <Link href="/settings" asChild>
                        <Pressable>
                          <View style={{padding:5}}>
                            <ThemedIcon name="settings" />
                          </View>
                        </Pressable>
                        </Link>
                            <Link href="/settings" asChild>
                        <Pressable>
                          <View style={{padding:5}}>
                            <ThemedIcon name="settings" />
                          </View>
                        </Pressable>
                        </Link>
                        </View>
                    )
                }} 
            />

        </Stack>
    );
}
