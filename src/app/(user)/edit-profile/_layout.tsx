import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function EditProfileLayout() {
    const colorScheme = useColorScheme();
    
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: colorScheme === 'dark' ? "white" : "black",
                headerShadowVisible: false,
                headerTransparent: false,
                headerStyle: {
                    backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF',
                },
            }}
        >
            <Stack.Screen 
                name="index" 
                options={{ 
                    title: 'Edit Profile',
                    headerShown: true,
                }} 
            />
        </Stack>
    );
}
