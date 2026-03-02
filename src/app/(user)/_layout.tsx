import { Stack } from 'expo-router';

export default function UserLayout() {
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
    </Stack>
  );
}
