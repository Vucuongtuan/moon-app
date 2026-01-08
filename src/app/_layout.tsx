import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

// -- css
import { ThemedView } from '../components/themed-view';
// import { useCheckOnboarding } from '../hooks/useCheckOnboarding';
import PopUp from '../components/popUp';
import { LocaleProvider } from '../provider/localeProvider';
import TanStackProvider from '../provider/tanStackProvider';
import './global.css';
// ---

// Dev mode: force vào index screen để dễ navigate
export const unstable_settings = {
  anchor: '/',
};




// --- create splash screen 
// Note: SplashScreen.setOptions không hoạt động trong Expo Go
// Uncomment khi build development build hoặc production
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

export default function RootLayout() {
  const pathname = usePathname();
  const isActiveHeader = pathname === '/(tabs)/settings' || pathname === '/';
  // Dev mode: comment để không auto-redirect
  // const checking = useCheckOnboarding();
  // if (checking) {
  //   return null;
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TanStackProvider>
        <LocaleProvider>
          <ThemedView style={{ flex: 1 }} >
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(page)/[slug]" options={{ headerShown: false }} />
              <Stack.Screen name="(posts)/[slug]" options={{ headerShown: false }} />
              <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              
              {/* Settings screen - Full screen modal KHÔNG có bottom tabs */}
              <Stack.Screen name="settings" options={{ headerShown: false }} />
            
              {/* <Stack.Screen
                name="modals/product-detail"
                options={{ presentation: 'modal', title: 'Product Detail' }}
              /> */}
            </Stack>
            <StatusBar style={'dark'} />
            <PopUp />
          </ThemedView>
        </LocaleProvider>
      </TanStackProvider>
    </GestureHandlerRootView>
  );
}
