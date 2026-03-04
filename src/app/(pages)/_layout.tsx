import { Stack } from 'expo-router';

export default function PagesLayout() {
  return (
    <Stack screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="edit-profile"
        options={{
          headerTitle: 'Edit Profile',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="posts/[slug]"
        options={{
          headerShown: false,
        }}
      />
      {/* Generic dynamic page route [slug] configuration is handled directly inside [slug].tsx via Stack.Screen, but we can declare it here implicitly or explicitly. By default it inherits from this layout. */}
    </Stack>
  );
}
