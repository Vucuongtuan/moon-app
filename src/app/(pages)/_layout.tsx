import { Stack } from 'expo-router';

export default function PagesLayout() {
  return (
    <Stack screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="[slug]" />
      <Stack.Screen
        name="edit-profile"
        options={{
          headerTitle: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
        }}
      />
      <Stack.Screen name="posts/[slug]" options={{ headerShown: false }} />
    </Stack>
  );
}
