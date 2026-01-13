import { Stack } from "expo-router";



export default function SettingsLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ 
                headerShown: true,
                headerTitle:'Settings', 
                title:"Settings",headerTitleAlign:'center',
                headerBackTitle:"Back",headerBlurEffect:'systemUltraThinMaterial',headerBackVisible:true}} />
        </Stack>
    );
}