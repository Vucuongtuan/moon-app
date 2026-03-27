import FlashSearch from '@/src/components/Search/FlashSearch';
import { ThemedView } from '@/src/components/themed-view';
import { useLocalSearchParams } from 'expo-router';
export default function SearchScreen() {
  const {q} = useLocalSearchParams()
  return (
    <ThemedView style={{flex:1,}}>
      <FlashSearch keyword={q as string || ''} />
    </ThemedView>
  );
}
