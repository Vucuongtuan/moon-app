import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function ProfileLayout() {
    const colorSchema = useColorScheme();
    
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: colorSchema === 'dark' ? "white" : "black",
                headerBlurEffect: colorSchema === 'dark' ? "dark" : "extraLight",
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen 
                name="index" 
                options={{ 
                    title: 'Profile',
                    headerShown: false
                }} 
            />
        </Stack>
    );
}
