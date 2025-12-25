import { ChangeLocale } from '@/src/provider/localeProvider';
import { Image } from 'expo-image';
import React from 'react';
import { useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OpenSearchModel } from '../Search/SearchModel';
import { ThemedView } from '../themed-view';
const headerDark = require('@/assets/images/Header_W.png');
const headerLight = require('@/assets/images/Header_B.png');

export function SharedHeader({ title }: { title: string }) {
  const insets = useSafeAreaInsets()
  const theme = useColorScheme()
  const isDark = theme === 'dark'
  return (
    <ThemedView style={{ paddingHorizontal: 0 ,paddingTop: insets.top ,paddingBottom:10,backgroundColor:"red"}}>
      <View className="flex-row items-center justify-between h-8">
        <View className=' w-1/2'>
          <Image
            source={isDark ? headerDark : headerLight}
            contentFit="contain"
            style={{
              width: 140,
              height: 64
            }}
          />
        </View>
        <View className=' w-1/2 items-end pr-6 justify-end gap-12 flex-row'>
           <ChangeLocale/>
          <OpenSearchModel />
        </View>
      </View>
    </ThemedView>
  );
}
