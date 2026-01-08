import { ChangeLocale } from '@/src/provider/localeProvider';
import { Image } from 'expo-image';
import React from 'react';
import { useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OpenSearchModel } from '../Search/SearchModel';
import { ThemedView } from '../themed-view';
import { styles } from './SharedHeader.styles';

const headerDark = require('@/assets/images/Header_W.png');
const headerLight = require('@/assets/images/Header_B.png');

export function SharedHeader({ title }: { title: string }) {
  const insets = useSafeAreaInsets()
  const theme = useColorScheme()
  const isDark = theme === 'dark'
  return (
    <ThemedView style={[styles.ctn, { paddingTop: insets.top }]}>
      <View style={styles.innerCtn}>
        <View style={styles.leftCtn}>
          <Image
            source={isDark ? headerDark : headerLight}
            contentFit="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.rightCtn}>
           <ChangeLocale/>
          <OpenSearchModel />
        </View>
      </View>
    </ThemedView>
  );
}
