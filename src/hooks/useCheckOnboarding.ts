import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export function useCheckOnboarding() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const seen = await AsyncStorage.getItem('hasSeenOnboarding');
        await router.replace(seen ? '/(tabs)' : '/(onboarding)');
      } catch (e) {
        await router.replace('/(tabs)');
      } finally {
        setChecking(false);
      }
    })();
  }, [router]);

  return checking;
}